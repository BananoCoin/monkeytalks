import simplejson as json
import redis
import datetime
from flask_socketio import emit
from app.extensions import scheduler
from app.util.dateutil import format_js_iso

def check_missings():
    # TODO - Check recent account history for messages that were missed
    pass

rd = redis.Redis()
def send_fake_messages():
    id = 10
    if rd.get('mttestid') is None:
        rd.set('mttestid', '10')
    else:
        id = int(rd.get('mttestid').decode('utf-8')) + 1
        rd.set('mttestid', str(id))
    message_json = {
        'id': id,
        'content': '3085200816947056507',
        'date': format_js_iso(datetime.datetime.utcnow()),
        'premium': False if id % 2 == 0 else True
    }
    with scheduler.app.app_context():
        emit('new_message', json.dumps(message_json), namespace='/mtchannel', broadcast=True)