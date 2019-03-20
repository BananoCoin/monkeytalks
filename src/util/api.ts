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
}