from flask import Blueprint, request, abort, jsonify
from app.util.captcha import Captcha

blueprint = Blueprint('faucet', __name__, static_folder='../static')

@blueprint.route('/faucetClaim', methods=['POST'])
def faucet_claim():
    json_data = request.get_json(silent=True)
    if json_data is None:
        abort(400, 'bad request')
    elif 'address' not in json_data or 'recaptchaToken' not in json_data:
        abort(400, 'bad request')

    return jsonify({"amount":10, "captcha_verified":Captcha().verify(json_data['recaptchaToken']) })