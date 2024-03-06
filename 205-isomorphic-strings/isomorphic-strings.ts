function isIsomorphic(s: string, t: string): boolean {
    
    const createMap = (str: string) => {
        const map = new Map();

        for(let i=0; i<str.length; i++) {
            const value = str[i];

            if (map.has(value)) {
                map.set(value, `${map.get(str[i])+i}`);
            } else {
                map.set(value, `${i}`);
            }
        }
        return map;
    };

    const sValues = [...createMap(s).values()];
    const tValues = [...createMap(t).values()];

    for(let i=0; i<sValues.length; i++) {
        if (sValues[i] !== tValues[i]) {
            return false;
        } 
    }

    return true;
};