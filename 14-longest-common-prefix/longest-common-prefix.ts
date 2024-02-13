function longestCommonPrefix(strs: string[]): string {

    const strLengthZeroCount = strs.filter(str => str.length === 0).length;

    if (strLengthZeroCount > 0) {
        return "";
    }

    const startItem = strs[0];
    let prefix = '';

    [...startItem].forEach((str, index) => {
        const compared = index === 0 ? str : prefix+str;
        const filtered = strs.filter(item => item.startsWith(compared)).length;

        if (filtered === strs.length) {
            prefix = compared;
        } 
    });
    

    return prefix;
    
};