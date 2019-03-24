from flask_webpack import Webpack
from flask_socketio import SocketIO
from flask_cors import CORS
from flask_apscheduler import APScheduler

webpack = Webpack()
socketio = SocketIO()
cors = CORS()
scheduler = APScheduler()
