import simplejson as json

from app.util.nanote import Nanote
from app.util.validations import Validations

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
        assert(Nanote.validate_message('1473211653') == False)
        assert(Nanote.validate_message('3085200816947056507') == True)

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