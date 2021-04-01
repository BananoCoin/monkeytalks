from flask import Blueprint, request, abort, jsonify
from app.util.captcha import Captcha
from app.models.FaucetModel import FaucetPayment
from app.database import db

blueprint = Blueprint('faucet', __name__, static_folder='../static')

@blueprint.route('/faucetClaim', methods=['POST'])
def faucet_claim():
    json_data = request.get_json(silent=True)
    if json_data is None:
        abort(400, 'bad request')
    elif 'address' not in json_data:
        abort(400, 'bad request')
    elif 'hcaptchaResponse' not in json_data or json_data['hcaptchaResponse'] is None:
        return jsonify({"error": "Captcha verification failed"})
    if 'recaptchaToken' in json_data:
        abort(500, 'server error')
    if not Captcha.verify_hcaptcha(json_data['hcaptchaResponse'], request.remote_addr):
        return jsonify({"error": "Captcha verification failed"})
    with db.database.connection_context():
        payment, message = FaucetPayment.make_or_reject_payment(json_data['address'], request.remote_addr)
    if payment is None:
        return jsonify({"error": message})
    return jsonify({"success":message})