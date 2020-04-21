import redis
import gevent.tests.test__os
import simplejson as json

from app.app import create_app
from app.settings import TestConfig
from app.util.nanote import Nanote
from app.util.validations import Validations
from app.models.MessageModel import Message, RD_COUNT_KEY

class TestAPI:
    def test_messages_api(self, testapp):
        resp = testapp.get('/messages')
        assert resp.status_code == 200
        assert resp.headers['Content-Type'] == 'application/json'

    def test_fees_api(self, testapp):
        resp = testapp.get('/fees')
        assert resp.status_code == 200
        assert resp.headers['Content-Type'] == 'application/json'
        resp_json = json.loads(resp.body)
        assert('fee' in resp_json)
        assert('premium' in resp_json)
        int(resp_json['fee'])
        int(resp_json['premium'])

class TestUtil:
    def test_checksum_validation(self):
        nanote = Nanote()
        assert(nanote.validate_message('1473211653') == False)
        assert(nanote.validate_message('3085200816947056507') == True)

    def test_address_validations(self):
        raw_string = 'abbcddfasdban_1ph8tfwan1jd91pcettzn8rg448pooin1tz9juhsq1wbhsijebgcho411kum242134143'
        extracted = Validations.get_banano_address(raw_string)
        assert(extracted == 'ban_1ph8tfwan1jd91pcettzn8rg448pooin1tz9juhsq1wbhsijebgcho411kum')
        # Test valid address
        assert(Validations.validate_address(extracted) == True)
        # Test invalid character (l)
        assert(Validations.validate_address('ban_1ph8tfwan1jd91pcettzn8rg448pooin1tz9juhsq1wbhsijebgcho411kul') == False)
        # Test bad checksum
        assert(Validations.validate_address('ban_1ph8tfwan1jd91pcettzn8rg448pooin1tz9juhsq1wbhsijebgcho411kuk') == False)
        # Test wrong prefix
        assert(Validations.validate_address('xrb_1ph8tfwan1jd91pcettzn8rg448pooin1tz9juhsq1wbhsijebgcho411kum') == False)
        # Test length (too long)
        assert(Validations.validate_address('ban_1ph8tfwan1jd91pcettzn8rg448pooin1tz9juhsq1wbhsijebgcho411kumk') == False)
        # Test length (too short)
        assert(Validations.validate_address('ban_1ph8tfwan1jd91pcettzn8rg448pooin1tz9juhsq1wbhsijebgcho411ku') == False)

    def test_block_validation(self, app):
        fee = app.config['MONKEYTALKS_DEFAULT_FEE']
        block_contents = {
            'link_as_account':app.config['MONKEYTALKS_ACCOUNT']
        }
        # Test with invalid message (checksum)
        resp, reason = Message.validate_block({'amount':str(fee), 'contents':json.dumps(block_contents)})
        assert(resp == False)
        # Test with valid message
        resp, reason = Message.validate_block({'amount':str(fee + 3085200816947056507), 'contents':json.dumps(block_contents)})
        assert(resp == True)
        # Test with invalid fee
        resp, reason = Message.validate_block({'amount':str(fee + 3085200816947056507 - fee), 'contents':json.dumps(block_contents)})
        assert(resp == False)
        # Test with invalid link
        block_contents['link_as_account'] = 'ban_1ph8tfwan1jd91pcettzn8rg448pooin1tz9juhsq1wbhsijebgcho411kum'
        resp, reason = Message.validate_block({'amount':str(fee + 3085200816947056507),'contents':json.dumps(block_contents)})
        assert(resp == False)