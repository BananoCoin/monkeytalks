import datetime
import simplejson as json
import peewee
import redis

from app.database import db
from app.settings import AppConfig
from app.models.FeeModel import FeeModel
from app.util.nanote import Nanote

# Redis stores message counts, because postgres count is a slow operation
RD_COUNT_KEY = 'mtcount'
rd = redis.Redis()

class Message(db.Model):
    block_hash = peewee.CharField(max_length=64)
    address = peewee.CharField(max_length=64)
    message_in_raw = peewee.CharField()
    created_at = peewee.DateTimeField(default=datetime.datetime.utcnow(), index=True)
    premium = peewee.BooleanField(default=False)
    hidden = peewee.BooleanField(default=False, index=True)
    destination = peewee.CharField(max_length=64)

    class Meta:
        db_table = 'messages'
    
    @staticmethod
    def validate_block(block : dict) -> tuple:
        block_contents = json.loads(block['contents'])
        """Ensure a block is to the appropriate destination, of the minimum amount, etc"""
        if block_contents['link_as_account'] != AppConfig.MONKEYTALKS_ACCOUNT:
            return (False, "Transaction wasnt sent to MonkeyTalks account")
        elif int(block['amount']) - FeeModel.get_fee() <= 0:
            return (False, "Transaction amount wasn't enough to cover fee")
        elif not Nanote().validate_message(block['amount']):
            return (False, "Message has invalid checksum - can't be decoded")
        return (True, "Valid")

    @staticmethod
    def save_block_as_message(block : dict):
        block_contents = json.loads(block['contents'])
        premium = False
        if int(block['amount']) - FeeModel().get_premium_fee() > 0:
            premium = True
        message = Message(
            block_hash = block['hash'],
            destination = block_contents['link_as_account'],
            message_in_raw = str(int(block['amount'])),
            created_at = datetime.datetime.utcnow(),
            premium = premium,
            address = block_contents['account']
        )
        if message.save() > 0:
            message.inc_message_count()
            return message
        return None

    def inc_message_count(self) -> int:
        """Increment message count for a particular account and
        return the new count"""
        old_count = rd.hget(self.address, RD_COUNT_KEY)
        if old_count is None:
            rd.hset(self.address, RD_COUNT_KEY, '1')
            return 1
        else:
            old_count = int(old_count.decode('utf-8'))
            old_count += 1
            rd.hset(self.address, RD_COUNT_KEY, str(old_count))
            return old_count

    def get_message_count(self) -> int:
        """Retrieve message count for a particular account"""
        count = rd.hget(self.address, RD_COUNT_KEY)
        if count is None:
            return 0
        return int(count.decode('utf-8'))