import os

class AppConfig(object):
    SECRET_KEY = os.environ.get('APP_SECRET', 'secret-key')
    # Paths
    APP_DIR = os.path.abspath(os.path.dirname(__file__))  # This directory
    STATIC_DIR = os.path.abspath(os.path.join(APP_DIR, 'static', 'build'))
    PROJECT_ROOT = os.path.abspath(os.path.join(APP_DIR, os.pardir))
    BCRYPT_LOG_ROUNDS = 13
    # Webpack
    WEBPACK_MANIFEST_PATH = os.path.join(APP_DIR, 'webpack', 'manifest.json')
    # Node Info
    NODE_URL = '[::1]'
    NODE_IP = 7072
    # Our account info
    MONKEYTALKS_ACCOUNT='xrb_1monkeyt1f1ihea3iz4wmgpizfk5k938jyj15xmd414bdb94kz7n4rmgo3iy'
    MONKEYTALKS_DEFAULT_FEE=1000000000000000000000000000000 # 10 BANANO
    MONKEYTALKS_DEFAULT_PREMIUM_FEE=1000000000000000000000000000000 # 10 BANANO for premium message

class DevConfig(AppConfig):
    ENV = 'dev'
    # DB
    DB_NAME = 'dev.db'
    # Put the db file in project root
    DB_PATH = os.path.join(AppConfig.PROJECT_ROOT, DB_NAME)
    DATABASE = os.environ.get('DATABASE', 'sqlite:///{0}'.format(DB_PATH))

class ProdConfig(AppConfig):
    ENV = 'prod'
    DEBUG = False
    # Periodic Jobs
    JOBS = [
		{
 			'id': 'missingcheck',
 			'func': 'app.cron.CronJobs:check_missings',
			'trigger': 'interval',
			'minutes': 30
		},
		{
 			'id': 'testmessagejob',
 			'func': 'app.cron.CronJobs:send_fake_messages',
			'trigger': 'interval',
			'seconds': 30
		},
    ]
    SCHEDULER_API_ENABLED = True
    # Postgres for production
    DB_USER = 'monkeytalks'
    DB_PASS = os.getenv("MONKEYTALKS_DB_PASSWORD", "password")
    DB_HOST = '127.0.0.1'
    DB_NAME = 'monkeytalks'
    DATABASE = f'postgresext+pool://{DB_USER}:{DB_PASS}@{DB_HOST}/{DB_NAME}?max_connections=70&stale_timeout=300&autorollback=True'

class TestConfig(AppConfig):
    """Test configuration."""
    TESTING = True
    DEBUG = True
    # DB
    DB_NAME = 'dev.db'
    # Put the db file in project root
    DB_PATH = os.path.join(AppConfig.PROJECT_ROOT, DB_NAME)
    DATABASE = os.environ.get('DATABASE', 'sqlite:///{0}'.format(DB_PATH))
    BCRYPT_LOG_ROUNDS = 4  # For faster tests; needs at least 4 to avoid "ValueError: Invalid rounds"
    WTF_CSRF_ENABLED = False  # Allows form testing