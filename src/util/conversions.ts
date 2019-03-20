import Big from 'big.js'

const BANANO_RAW = Big(10).pow(29)

export default class Conversions {
    static rawToBanano(rawAmount : string) : string {
        let rawAsBig = Big(rawAmount)
        return rawAsBig.div(BANANO_RAW).toString()
    } 

    static computeWithFee(rawAmount : string, fee : string) : string {
        return (Big(rawAmount).add(Big(fee))).toString()
    }
}