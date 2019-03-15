from app.settings import AppConfig
from app.app import create_app

app = create_app(AppConfig)