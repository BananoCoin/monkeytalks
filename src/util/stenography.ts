import Nanote from './nanote'
import bigInt from 'big-integer'

const sikrit : bigInt.BigInteger = bigInt('895175784877')

export default class Stenography {
    static encodeMessage(input : string) : string {
        return (bigInt(new Nanote().encode_raw(input)).xor(sikrit)).toString()
    }

    //this will decode and display your message
    static decodeMessage(sum : string) : string {
        // Only consider last 29 digits
        while (sum.length > 29) {
            sum.substr(1)
        }
        sum = (bigInt(sum).xor(sikrit)).toString()
        return new Nanote().decode_raw(sum)
    }
}
