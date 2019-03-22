from flask.helpers import get_debug_flag

from app.app import create_app
from app.extensions import socketio
from app.settings import DevConfig, ProdConfig

CONFIG = DevConfig if get_debug_flag() else ProdConfig

app = create_app(CONFIG)

if __name__ == '__main__':
    socketio.run(app)