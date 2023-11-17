enum RomanString {
    I = 'I',
    V = 'V',
    X = 'X', 
    L = 'L',
    C = 'C',
    D = 'D',
    M = 'M',
};

enum RomanValue {
    I = 1,
    V = 5,
    X = 10,
    L = 50,
    C = 100,
    D = 500,
    M = 1000,           
};
    
const getMinusValue = (curr: RomanString, nextValue: RomanString ): number => {         
    const RomanValueObj = Object.assign(RomanValue);
    return RomanValueObj[nextValue] - RomanValueObj[curr];
};
    

function chkMinus (roman: string, next: string | undefined): number {
    
    const RomanValueObj = Object.assign(RomanValue);
    
    switch (roman) {
            
        case RomanString.I:
            if (next === RomanString.V || next === RomanString.X) {
                return getMinusValue(roman, next);
            } else {
                return RomanValueObj[roman];
            }
            break;
            
        case RomanString.X:
            if (next === RomanString.L || next === RomanString.C) {
                return getMinusValue(roman, next);
            } else {
                return RomanValueObj[roman];
            }
            break;
            
        case RomanString.C:
            if (next === RomanString.D || next === RomanString.M) {
                return getMinusValue(roman, next);
            } else {
                return RomanValueObj[roman];
            }
            break;
            
        default: return;
    }
    
};
    
function romanToInt(s: string): number {
    let result: number = 0;
    const RomanValueObj = Object.assign(RomanValue);
    
    
    for(let i=0; i < s.length; i++) {
        const item: string = s[i];
        const next: string = s[i+1];
        
        switch (item) {
                
            case RomanString.I:
            case RomanString.X:
            case RomanString.C:
                const chkValue = chkMinus(item, next);
                result += chkValue;
                
                if (chkValue !== RomanValueObj[item]) {
                    i++;
                    break;
                }
                break;
            
            case RomanString.V:
                result += RomanValueObj[RomanString.V];
                break;
                
            case RomanString.L:
                result += RomanValueObj[RomanString.L];
                break;
                
            case RomanString.D:
                result += RomanValueObj[RomanString.D];
                break;
            
            case RomanString.M:
                result += RomanValueObj[RomanString.M];
                break;
            
            default: break;
            
        }
    }
    
    return result;
};
    
    