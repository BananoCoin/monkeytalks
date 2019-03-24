import simplejson as json

from app.util.nanote import Nanote

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