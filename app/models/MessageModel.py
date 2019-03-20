import datetime
import simplejson as json
import peewee

from app.database import db
from app.settings import AppConfig
from app.models.FeeModel import FeeModel

class Message(db.Model):
    block_hash = peewee.CharField()
    address = peewee.CharField()
    message_in_raw = peewee.CharField()
    created_at = peewee.DateTimeField(default=datetime.datetime.utcnow())
    premium = peewee.BooleanField(default=False)
    hidden = peewee.BooleanField(default=False)

    class Meta:
        db_table = 'messages'
    
    @staticmethod
    def validate_block(block : dict):
        block_contents = json.loads(block['contents'])
        """Ensure a block is to the appropriate destination, of the minimum amount, etc"""
        if block_contents['link_as_account'] != AppConfig.MONKEYTALKS_ACCOUNT:
            return (False, "Transaction wasnt sent to MonkeyTalks account")
        elif int(block['amount']) - FeeModel.get_fee() <= 0:
            return (False, "Transaction amount wasn't enough to cover fee")
        return (True, "Valid")

    @staticmethod
    def save_block_as_message(block : dict):
        block_contents = json.loads(block['contents'])
        premium = False
        if int(block['amount']) - FeeModel.get_premium_fee() > 0:
            premium = True
        message = Message(
            block_hash = block['hash'],
            address = block_contents['link_as_account'],
            message_in_raw = str(int(block['amount'])),
            created_at = datetime.datetime.utcnow(),
            premium = premium
        )
        if message.save() > 0:
            return message
        return None