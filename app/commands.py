import click
from flask.cli import with_appcontext

from app.models.MessageModel import Message

@click.command()
@with_appcontext
def dbinit():
    """Create database tables"""
    Message.create_table(fail_silently=True)
