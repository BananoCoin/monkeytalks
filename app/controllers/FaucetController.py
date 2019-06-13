from flask import Blueprint, request, abort, jsonify
from app.util.captcha import Captcha
from app.models.FaucetModel import FaucetPayment

blueprint = Blueprint('faucet', __name__, static_folder='../static')

@blueprint.route('/faucetClaim', methods=['POST'])
def faucet_claim():
    json_data = request.get_json(silent=True)
    if json_data is None:
        abort(400, 'bad request')
    elif 'address' not in json_data or 'recaptchaToken' not in json_data:
        abort(400, 'bad request')
    if not Captcha.verify(json_data['recaptchaToken']):
        return jsonify({"error": "Captcha verification failed"})
    elif not Captcha.verify_hcaptcha(json_data['hcaptchaResponse'], request.remote_addr):
        return jsonify({"error": "Captcha verification failed"})
    payment, message = FaucetPayment.make_or_reject_payment(json_data['address'], request.remote_addr)
    if payment is None:
        return jsonify({"error": message})
    return jsonify({"success":message})