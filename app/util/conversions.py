class BananoConversions():
    # 1 BANANO = 10e29 RAW
    RAW_PER_BAN = 10 ** 29

    @classmethod
    def raw_to_banano(self, raw_amt):
        return raw_amt / self.RAW_PER_BAN

    @staticmethod
    def banano_to_raw(ban_amt):
        expanded = float(ban_amt) * 100
        return int(expanded) * (10 ** 27)