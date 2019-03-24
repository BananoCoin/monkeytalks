"""Defines fixtures available to all tests."""

import pytest
from webtest import TestApp

from app.app import create_app
from app.settings import TestConfig
from app.models.MessageModel import Message

@pytest.fixture
def app():
    """An application for the tests."""
    _app = create_app(TestConfig)
    ctx = _app.test_request_context()
    ctx.push()

    yield _app

    ctx.pop()


@pytest.fixture
def testapp(app):
    """A Webtest app."""
    return TestApp(app)

@pytest.fixture
def db(app):
    """A database for the tests."""
    with app.app_context():
        Message.create_table(safe=True)