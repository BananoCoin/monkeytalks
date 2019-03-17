import logging
from flask import Blueprint, render_template
from app.extensions import socketio

blueprint = Blueprint('home', __name__, static_folder='../static')

@blueprint.route('/')
def index():
    return render_template('app.html')

@socketio.on('connect', namespace='/mtchannel')
def on_socket_connect():
    logging.info('SocketIO client connected')