import Big from 'big.js'

const BANANO_RAW = Big(10).pow(29)

export default class Conversions {
    static rawToBanano(rawAmount : string) : string {
        Big.DP = 29
        let rawAsBig = Big(rawAmount)
        console.log(rawAsBig.div(BANANO_RAW).toString())
        return rawAsBig.div(BANANO_RAW).toString()
    } 

    static computeWithFee(rawAmount : string, fee : string) : string {
        return (Big(rawAmount).add(Big(fee))).toString()
    }
}