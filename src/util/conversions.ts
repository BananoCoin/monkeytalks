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

    static formatDateStr(rawDate : string) : string {
        let date : Date = new Date(rawDate);
        let retTime = "";
        retTime += date.toLocaleDateString() + ' ';
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        let minutesStr = minutes < 10 ? '0' + minutes : minutes;
        retTime += hours + ':' + minutesStr + ' ' + ampm;
        return retTime;       
    }
}