import click
import datetime
import random
import simplejson as json
from flask_socketio import emit
from flask.cli import with_appcontext

from app.models.MessageModel import Message
from app.util.dateutil import format_js_iso

@click.command()
@with_appcontext
def dbinit():
    """Create database tables"""
    Message.create_table(fail_silently=True)

@click.command()
@with_appcontext
def testmessage():
    """Send a test message to the UI"""
    items = ['896856724645', '896854539429', '898212557420', '893918905817', '898279242968']
    message_json = {
        'id': 10,
        'content': random.choice(items),
        'date': format_js_iso(datetime.datetime.utcnow()),
        'premium': random.choice([False, True]),
        'test': True
    }
    emit('new_message', json.dumps(message_json), namespace='/mtchannel', broadcast=True)