import simplejson as json
import requests

from app.settings import AppConfig

class RPC():
    def __init__(self, node_url=AppConfig.NODE_URL, node_ip=AppConfig.NODE_IP):
        self.node_url = node_url
        self.node_ip = node_ip

    def communicate_wallet(self, wallet_command):
        formattedUrl = "http://{0}:{1}".format(self.node_url, self.node_ip)
        try:
            r = requests.post(formattedUrl, json=wallet_command, timeout=300)
            return r.json()
        except requests.exceptions.RequestException:
            return None

    def retrieve_block(self, hash):
        action = {
            "action": "block_info",
            "hash": hash
        }
        resp = self.communicate_wallet(action)
        if 'contents' in resp:
            return json.loads(resp)
        else:
            return None
