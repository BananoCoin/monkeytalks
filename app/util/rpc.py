import simplejson as json
import requests

from app.settings import AppConfig

class RPC():
    def __init__(self, node_url : str = AppConfig.NODE_URL, node_ip : str = AppConfig.NODE_IP):
        self.node_url = node_url
        self.node_ip = node_ip

    def communicate_wallet(self, wallet_command : dict) -> dict:
        formattedUrl = "http://{0}:{1}".format(self.node_url, self.node_ip)
        try:
            r = requests.post(formattedUrl, json=wallet_command, timeout=300)
            return r.json()
        except requests.exceptions.RequestException:
            return None

    def retrieve_block(self, hash : str) -> dict:
        action = {
            "action": "block_info",
            "hash": hash
        }
        resp = self.communicate_wallet(action)
        if resp is not None and 'contents' in resp:
            return resp
        return None

    def account_balance(self, account : str) -> int:
        """Return account balance as integer, None if error"""
        action = {
            "action": "account_balance",
            "account": account
        }
        resp = self.communicate_wallet(action)
        if resp is not None and 'balance' in resp:
            return int(resp['balance'])
        return None

    def send(self, destination: str, amount_raw : str) -> str:
        """Send amount to destination, return hash. None if failed"""
        action = {
            "action": "send",
            "wallet": AppConfig.WALLET_ID,
            "source": AppConfig.MONKEYTALKS_ACCOUNT,
            "destination": destination,
            "amount": amount_raw
        }
        resp = self.communicate_wallet(action)
        if resp is not None and 'block' in resp:
            return resp['block']
        return None

    def account_history(self, account : str, count : int = 100) -> list:
        """Return account history, limited by count"""
        action = {
            "action": "account_history",
            "account": account,
            "count": count,
            "raw": True
        }
        resp = self.communicate_wallet(action)
        if resp is not None and 'history' in resp:
            return resp['history']
        return None

    def account_open(self, account : str) -> bool:
        action = {
            "action": "account_info",
            "account": account
        }
        resp = self.communicate_wallet(action)
        if resp is None or 'error' in resp:
            return False
        return True