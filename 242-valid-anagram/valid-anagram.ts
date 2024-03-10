function isAnagram(s: string, t: string): boolean {
    
    if (s.length !== t.length) return false;

    const makeMap = (str: string) => {
        const map = new Map<number, number>();

        for(let i=0; i<str.length; i++) {
            const key = str.codePointAt(i);

            if (map.has(key)) {
                map.set(key, map.get(key) + 1);
            } else {
                map.set(key, 1);
            }
        }

        return map;
    };

    const sMap = makeMap(s), tMap = makeMap(t);
    
    const result = [...tMap.keys()].every((key: number) => {
        if (!sMap.get(key) || tMap.get(key) !== sMap.get(key)) return false;
        else return true;
    })

    return result;
    
};