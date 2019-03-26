import requests

from app.settings import AppConfig

class Captcha():
    @staticmethod
    def verify(token : str) -> bool:
        """Verify a recaptcha request, return True if valid False otherwise"""
        formattedUrl = "https://www.google.com/recaptcha/api/siteverify"
        try:
            r = requests.post(formattedUrl, data={"secret":AppConfig.RECAPTCHA_SECRET, "response":token}, timeout=300)
            resp_json = r.json()
            if 'success' in resp_json and resp_json['success']:
                return True
            return False
        except requests.exceptions.RequestException:
            return False
