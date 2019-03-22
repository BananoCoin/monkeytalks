import redis
from app.settings import AppConfig

rd = redis.Redis()

class FeeModel():
    FEE_KEY = 'mt_fee_key'
    FEE_PREMIUM_KEY = 'mt_premium_fee_key'
    DEFAULT_FEE = AppConfig.MONKEYTALKS_DEFAULT_FEE
    DEFAULT_PREMIUM_FEE = AppConfig.MONKEYTALKS_DEFAULT_PREMIUM_FEE + AppConfig.MONKEYTALKS_DEFAULT_FEE

    @classmethod
    def get_fee(self) -> int:
        return self.DEFAULT_FEE if rd.get(self.FEE_KEY) is None else int(rd.get(self.FEE_KEY).decode('utf-8'))

    @classmethod
    def get_premium_fee(self) -> int:
        return self.DEFAULT_PREMIUM_FEE if rd.get(self.FEE_PREMIUM_KEY) is None else int(rd.get(self.FEE_PREMIUM_KEY).decode('utf-8'))
