import Nanote from './nanote/nanote.js'

export default class Stenography {
    //this will convert an integer to the corresponding ascii character
    static CHD(digitstodecode: number) : string {
        return String.fromCharCode(digitstodecode);
    }

    //this will return which ascii index a character has
    static CHE(charactertoencode : string) : number {
        return charactertoencode.charCodeAt(0);
    }

    static setCharAt(str : string, index : number, chr : string) : string {
        if (index > str.length - 1) return str;
        return str.substr(0, index) + chr + str.substr(index + 1);
    }

    static encodeMessage(input : string, sikrit: bigint) : string {
        return (BigInt(new Nanote().encode_raw(input)) ^ sikrit).toString()
    }

    //this will decode and display your message
    static decodeMessage(sum : string, sikrit: bigint) : string {
        // Only consider last 29 digits
        while (sum.length > 29) {
            sum.substr(1)
        }
        sum = (BigInt(sum) ^ sikrit).toString()
        return new Nanote().decode_raw(sum)
    }
}
