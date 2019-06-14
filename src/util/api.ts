import Axios from 'axios'

const API_LOCATION : string = location.protocol + '//' + document.domain + ':' + location.port

export default class API {
    static async getFees() : Promise<any> {
        try {
            let feeData = await Axios(API_LOCATION + '/fees')
            return feeData.data
        } catch (e) {
            return null;
        }
    }

    static async getMessages() : Promise<any> {
        try {
            let messageData = await Axios(API_LOCATION + '/messages')
            return messageData.data
        } catch (e) {
            return null;
        }
    }

    static async postFaucet(hcaptchaResponse: string, address: string) : Promise<any> {
        try {
            let faucetResponse = await Axios.post(API_LOCATION + '/faucetClaim', {
                address: address,
                hcaptchaResponse: hcaptchaResponse
            })
            return faucetResponse
        } catch (e) {
            return null;
        }
    }
}