import click
import datetime
import random
import redis
import os
import simplejson as json
from peewee import fn
from flask_socketio import emit
from flask.cli import with_appcontext

from app.models.MessageModel import Message, RD_COUNT_KEY
from app.models.FaucetModel import FaucetPayment
from app.util.dateutil import format_js_iso

HERE = os.path.abspath(os.path.dirname(__file__))
PROJECT_ROOT = os.path.join(HERE, os.pardir)
TEST_PATH = os.path.join(PROJECT_ROOT, 'tests')
@click.command()
def test():
	"""Run the tests."""
	import pytest
	rv = pytest.main([TEST_PATH, '--verbose'])
	exit(rv)


@click.command()
@with_appcontext
def dbinit():
    """Create database tables"""
    Message.create_table(safe=True)
    FaucetPayment.create_table(safe=True)

@click.command()
@with_appcontext
def testmessage():
    """Send a test message to the UI"""
    items = ['84366027282856535336916718', '893918905817', '195916083659420089', '63320448357418487154628848597']
    message_json = {
        'id': 10,
        'content': random.choice(items),
        'date': format_js_iso(datetime.datetime.utcnow()),
        'premium': random.choice([False, True]),
        'test': True,
        'count':1,
        'address':'ban_3jb1fp4diu79wggp7e171jdpxp95auji4moste6gmc55pptwerfjqu48okse'
    }
    emit('new_message', json.dumps(message_json), namespace='/mtchannel', broadcast=True)

@click.command()
@click.argument('hash', required=True)
@with_appcontext
def deletemsg(hash):
    try:
        m = Message.select().where(Message.block_hash  == hash).get()
        Message.update(hidden = True).where(Message.id == m.id).execute()
        emit('delete_message', json.dumps(Message.format_message(m)), namespace='/mtchannel', broadcast=True)
        click.echo(f"deleted message: {hash}")
    except Message.DoesNotExist:
        click.echo(f"Couldn't find message with has {hash}")

@click.command()
@click.argument('hash', required=True)
@with_appcontext
def undeletemsg(hash):
    try:
        m = Message.select().where(Message.block_hash  == hash).get()
        Message.update(hidden = False).where(Message.id == m.id).execute()
        click.echo(f"Un-hid message: {hash}")
    except Message.DoesNotExist:
        click.echo(f"Couldn't find message with has {hash}")

@click.command()
@with_appcontext
def fixcounts():
    rd = redis.Redis(host=os.getenv('REDIS_HOST', 'localhost'))
    for r in Message.select(fn.COUNT(Message.id).alias("count"), Message.address).where(Message.hidden == False).group_by(Message.address):
        click.echo(f"Setting count for {r.address} to {r.count}")
        rd.hset(r.address, RD_COUNT_KEY, str(r.count))
