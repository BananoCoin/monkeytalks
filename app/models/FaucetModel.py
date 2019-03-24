import datetime
import peewee

from app.database import db

class FaucetPayment(db.Model):
    destination = peewee.CharField(max_length=64)
    block_hash = peewee.CharField(max_length=64)
    created_at = peewee.DateTimeField(default=datetime.datetime.now())
    ip_address = peewee.CharField()

    class Meta:
        db_table = 'faucet_payments'