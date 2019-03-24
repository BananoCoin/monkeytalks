import eventlet
eventlet.monkey_patch()

from flask import Flask
from flask.helpers import get_debug_flag
from app import commands
from app.settings import AppConfig, ProdConfig
from app.controllers import HomeController
from app.database import db
from app.extensions import webpack, socketio, cors, scheduler
from werkzeug.contrib.fixers import ProxyFix

def create_app(config_object : AppConfig = ProdConfig) -> Flask:
    """Application Factory Pattern"""
    app = Flask(__name__.split('.')[0])
    app.config.from_object(config_object)
    register_extensions(app)
    register_blueprints(app)
    register_commands(app)
    app.wsgi_app = ProxyFix(app.wsgi_app)
    return app

def register_extensions(app):
    """Register Flask extensions."""
    cors.init_app(app)
    webpack.init_app(app)
    socketio.init_app(app, message_queue='redis://')
    db.init_app(app)
    if not get_debug_flag():
        scheduler.init_app(app)
        scheduler.start()
        with app.app_context():
            scheduler.run_job('missingcheck')

def register_blueprints(app):
    """Register Flask blueprints."""
    app.register_blueprint(HomeController.blueprint)

def register_commands(app):
    """Register Click commands."""
    app.cli.add_command(commands.test)
    app.cli.add_command(commands.dbinit)
    app.cli.add_command(commands.testmessage)