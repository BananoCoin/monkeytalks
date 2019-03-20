export default class Stenography {
    //this will convert an integer to the corresponding ascii character
    static CHD(digitstodecode: number) {
        return String.fromCharCode(digitstodecode);
    }

    //this will return which ascii index a character has
    static CHE(charactertoencode : string) {
        return charactertoencode.charCodeAt(0);
    }

    static setCharAt(str : string, index : number, chr : string) {
        if (index > str.length - 1) return str;
        return str.substr(0, index) + chr + str.substr(index + 1);
    }

    static encodeMessage(input : string, sikrit: bigint) {
        if (input.length == 0) {
            return "0"
        }
        input = input.toUpperCase();
        var i = input.length;
        while (i--) {
            if (Stenography.CHE(input.charAt(i)) > 96) {
                input = Stenography.setCharAt(input, i, '_');
            }
        }
        var encodedString = '';
        var i = input.length;
        while (i--) {
            encodedString = encodedString + Stenography.CHE(input.charAt(i));
        }
        return (BigInt(encodedString) ^ sikrit).toString()
    }

    //this will decode and display your message
    static decodeMessage(sum : string, sikrit: bigint) {
        sum = (BigInt(sum) ^ sikrit).toString()
        var egebnisdecoded = '';
        for (let i = 0; i < 25; i++) {
            var letter = Stenography.CHD(parseInt(sum.substr(sum.length - 2)))
            egebnisdecoded = egebnisdecoded + letter;
            sum = sum.substr(0, sum.length - 2);
        }
        return egebnisdecoded.toLowerCase();
    }
}
