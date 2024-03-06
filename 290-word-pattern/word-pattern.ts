function wordPattern(pattern: string, s: string): boolean {

    const map = new Map();
    const sArr = s.split(' ');

    if (pattern.length !== sArr.length) return false;
    
    for(let i=0; i<pattern.length; i++) {
        const pat = pattern[i];

        if (map.has(pat)) {
            if (map.get(pat) !== sArr[i]) {
                return false;
            }
        } else {
            const values = [...map.values()];

            if (!values.includes(sArr[i])) map.set(pat, sArr[i]);
            else return false;
        }
    }

    return true;
};