import Nanote from './nanote'
import bigInt from 'big-integer'

const sikrit : bigInt.BigInteger = bigInt('895175784877')

export default class Stenography {
    static encodeMessage(input : string) : string | boolean {
        let encoded : string | boolean = new Nanote().encode_raw(input)
        if (typeof encoded === 'boolean') {
            return false
        }
        return (bigInt(encoded).xor(sikrit)).toString()
    }

    //this will decode and display your message
    static decodeMessage(sum : string) : string | boolean {
        // Only consider last 29 digits
        sum = sum.slice(-29)
        sum = (bigInt(sum).xor(sikrit)).toString()
        return new Nanote().decode_raw(sum)
    }
}
