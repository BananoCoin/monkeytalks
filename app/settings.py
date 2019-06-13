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
    WALLET_ID=os.environ.get('MONKEYTALKS_WALLET_ID', '1234')
    MONKEYTALKS_ACCOUNT=os.environ.get('MONKEYTALKS_ACCOUNT', 'ban_1234')
    MONKEYTALKS_DEFAULT_FEE=500000000000000000000000000000 # 10 BANANO
    MONKEYTALKS_DEFAULT_PREMIUM_FEE=2000000000000000000000000000000 # 10 BANANO for premium message
    PAYOUT_FACTOR=0.0005 # Pay up to 0.1% of account balance
    # Recaptcha Secret
    RECAPTCHA_SECRET=os.getenv("RECAPTCHA_SECRET", "password")
    HCAPTCHA_SECRET=os.getenv("HCAPTCHA_SECRET", "password")
    # Solvemedia secret
    SOLVEMEDIA_CKEY=os.getenv("SOLVEMEDIA_CKEY", "ckey")
    SOLVEMEDIA_CKEY=os.getenv("SOLVEMEDIA_VKEY", "vkey")
    SOLVEMEDIA_CKEY=os.getenv("SOLVEMEDIA_HKEY", "hkey")

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