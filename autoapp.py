from gevent import monkey
monkey.patch_all()

import psycogreen.gevent
psycogreen.gevent.patch_psycopg()

from flask.helpers import get_debug_flag

from app.app import create_app
from app.extensions import socketio
from app.settings import DevConfig, ProdConfig
import os

CONFIG = DevConfig if get_debug_flag() else ProdConfig

app = create_app(CONFIG)

if __name__ == '__main__':
    socketio.run(app, host=os.getenv("APP_HOST", "127.0.0.1"), port=5000, debug=get_debug_flag())