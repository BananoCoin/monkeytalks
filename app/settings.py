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
    # DB
    DB_NAME = 'dev.db'
    # Put the db file in project root
    DB_PATH = os.path.join(PROJECT_ROOT, DB_NAME)
    DATABASE = os.environ.get('DATABASE', 'sqlite:///{0}'.format(DB_PATH))
    # Node Info
    NODE_URL = '[::1]'
    NODE_IP = 7072
    # Our account info
    MONKEYTALKS_ACCOUNT='ban_123456'
    MONKEYTALKS_DEFAULT_FEE=1000000000000000000000000000000 # 10 BANANO
    MONKEYTALKS_DEFAULT_PREMIUM_FEE=1000000000000000000000000000000 # 10 BANANO for premium message
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