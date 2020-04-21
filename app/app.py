import os
from flask import Flask
from flask.helpers import get_debug_flag
from app import commands
from app.settings import AppConfig, ProdConfig
from app.controllers import HomeController, FaucetController
from app.database import db
from app.extensions import webpack, socketio, cors, scheduler
from werkzeug.middleware.proxy_fix import ProxyFix

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
    socketio.init_app(app, message_queue=f'redis://{os.getenv("REDIS_HOST", "localhost")}:6379/')
    db.init_app(app)
    if not get_debug_flag():
        scheduler.init_app(app)
        scheduler.start()
        scheduler.run_job('missingcheck')

def register_blueprints(app):
    """Register Flask blueprints."""
    app.register_blueprint(HomeController.blueprint)
    app.register_blueprint(FaucetController.blueprint)

def register_commands(app):
    """Register Click commands."""
    app.cli.add_command(commands.test)
    app.cli.add_command(commands.dbinit)
    app.cli.add_command(commands.testmessage)
    app.cli.add_command(commands.deletemsg)
    app.cli.add_command(commands.fixcounts)