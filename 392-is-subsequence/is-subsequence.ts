function isSubsequence(s: string, t: string): boolean {
    
    let l;

    for(let i=0; i<s.length; i++) {
        const idx = t.slice(l+1).indexOf(s[i]);

        if (idx !== -1) {
            l = idx + (l === undefined ? 0 : l+1);
        } else {
            return false
        }
    }


    return true;

};