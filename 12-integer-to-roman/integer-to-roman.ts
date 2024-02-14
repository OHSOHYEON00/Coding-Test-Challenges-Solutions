function intToRoman(num: number): string {
    let result = '';
    let symbolInfo:Record<string, number> = {
        I: 1,
        V: 5,
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    // sort Objects in descending by values
    symbolInfo = Object.entries(symbolInfo)
    .sort(([,a],[,b]) => b-a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

    for(const key in symbolInfo) {
        const val = symbolInfo[key];

        while (num >= val) {
            num -= val;
            result += key;
        }
    }

 

    return result;
};