import Big from 'big.js'
import bigInt from 'big-integer'
import { blake2b } from 'blakejs'

const BANANO_RAW = Big(10).pow(29)
const ALPHABET = '13456789abcdefghijkmnopqrstuwxyz'

export default class Util {
    static rawToBanano(rawAmount : string) : string {
        Big.DP = 29
        let rawAsBig = Big(rawAmount)
        return rawAsBig.div(BANANO_RAW).toString()
    } 

    static computeWithFee(rawAmount : string, fee : string) : string {
        return (bigInt(rawAmount).add(bigInt(fee))).toString()
    }

    static getLang()
    {
      if (navigator.languages != undefined) {
        return navigator.languages[0]; 
      } else {
        return navigator.language;
      }
    }
    
    static getDayName(date: Date) {
      return date.toLocaleDateString(Util.getLang(), { weekday: "short" });
    }

    static formatDateStr(rawDate : string) : string {
        let date : Date = new Date(rawDate);
        let retTime = "";
        retTime += date.toLocaleDateString();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        let minutesStr = minutes < 10 ? '0' + minutes : minutes;
        retTime = hours + ':' + minutesStr + ' ' + ampm + ', ' + Util.getDayName(date) + ', ' + retTime;
        return retTime;       
    }

    static escapeHtml(unsafe : string) : string {
        return unsafe
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
    }

    // Extract banano address candidate from string, return null if not found
    static extractAddress(rawString : string) : string | null {
        let pattern : RegExp = new RegExp("(ban)(_)(1|3)[13456789abcdefghijkmnopqrstuwxyz]{59}", "g");
        rawString = rawString.toLowerCase();
        let matches : RegExpMatchArray | null = rawString.match(pattern)
        if (matches == null) {
            return null
        }
        return matches[0]
    }

    static readChar(char: string): number {
        const idx = ALPHABET.indexOf(char)
      
        if (idx === -1) {
          throw new Error(`Invalid character found: ${char}`)
        }
      
        return idx
      }

    static decodeNanoBase32(input: string): Uint8Array {
        const length = input.length
        const leftover = (length * 5) % 8
        const offset = leftover === 0 ? 0 : 8 - leftover
      
        let bits = 0
        let value = 0
      
        let index = 0
        let output = new Uint8Array(Math.ceil((length * 5) / 8))
      
        for (let i = 0; i < length; i++) {
          value = (value << 5) | this.readChar(input[i])
          bits += 5
      
          if (bits >= 8) {
            output[index++] = (value >>> (bits + offset - 8)) & 255
            bits -= 8
          }
        }
        if (bits > 0) {
          output[index++] = (value << (bits + offset - 8)) & 255
        }
      
        if (leftover !== 0) {
          output = output.slice(1)
        }
        return output
    }

    // Validate banano address, return address if valid, false if invalid
    static validateAddress(address : string) : string | boolean {
        let parsedAddress : string | null = this.extractAddress(address)
        if (parsedAddress == null) {
            return false
        }

        const publicKeyBytes = this.decodeNanoBase32(
          (parsedAddress as string).substr(4, 52)
        )
        const checksumBytes = this.decodeNanoBase32(
          (parsedAddress as string).substr(4 + 52)
        )
      
        const computedChecksumBytes = blake2b(publicKeyBytes, null, 5).reverse()
      
        let valid = true;
        for (let i = 0; i < checksumBytes.length; i++) {
            if (checksumBytes[i] !== computedChecksumBytes[i]) {
                valid = false
            }
        }
      
        if (!valid) {
            return false
        }

        return parsedAddress      
    }
}