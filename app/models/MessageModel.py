import datetime

import peewee

from app.database import db

class Message(db.Model):
    message_in_raw = peewee.CharField()
    created_by = peewee.CharField()
    created_at = peewee.DateTimeField(default=datetime.datetime.utcnow())

    class Meta:
        db_table = 'messages'