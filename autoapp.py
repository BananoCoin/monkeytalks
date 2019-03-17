from app.settings import AppConfig
from app.app import create_app
from app.extensions import socketio

app = create_app(AppConfig)

if __name__ == '__main__':
    socketio.run(app)