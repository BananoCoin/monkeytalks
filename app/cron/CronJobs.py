import redis
import os
import simplejson as json

from flask_socketio import emit

from app.extensions import scheduler
from app.util.rpc import RPC
from app.util.nanote import Nanote
from app.models.FeeModel import FeeModel
from app.models.MessageModel import Message

rd = redis.Redis(host=os.getenv('REDIS_HOST', 'localhost'))

lock_key = 'CRONMISSING_KEY'

def check_missings():
    """Browse acount history for items missing in our database"""
    # Only run this job once/per process, use a distributed lock for that
    try:
        lock = rd.lock(lock_key, timeout=300)
        have_lock = lock.acquire(blocking=False)
        if have_lock:
            rpc = RPC()
            app = scheduler.app
            with app.app_context():
                account = app.config['MONKEYTALKS_ACCOUNT']
                resp = rpc.account_history(account, count=200)
                if resp is None:
                    return
                # List of hashes to check (links on receive blocks)
                links = []
                linkObjs = []
                for item in resp:
                    if item["subtype"] == "receive":
                        linkObj = {
                            "link":item["link"],
                            "amount":item["amount"],
                            "account":item["account"]
                        }
                        links.append(item["link"])
                        linkObjs.append(linkObj)
                # Check links we don't have - remove duplicates
                for item in Message.select().where(Message.block_hash.in_(links)):
                    links.remove(item.block_hash)
                # Validate, save and emit messages
                for obj in linkObjs:
                    if obj['link'] not in links:
                        continue
                    if int(obj['amount']) - FeeModel.get_fee() <= 0:
                        continue
                    elif not Nanote().validate_message(obj['amount']):
                        continue
                    # Is a valid message
                    msg = Message.save_as_message(obj['amount'], obj['link'], obj['account'], account)
                    if msg is not None:
                        emit('new_message', json.dumps(Message.format_message(msg)), namespace='/mtchannel', broadcast=True)
    finally:
        lock.release()


