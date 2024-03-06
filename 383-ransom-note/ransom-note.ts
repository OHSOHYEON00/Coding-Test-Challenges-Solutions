function canConstruct(ransomNote: string, magazine: string): boolean {

    if (ransomNote.length > magazine.length) {
        return false;
    }

    let changed = magazine;

    for(let i=0; i<ransomNote.length; i++) {
        const idx = changed.indexOf(ransomNote[i]);

        if (idx !== -1) {
            changed = changed.replace(ransomNote[i], '');
        } else {
            return false;
        }
    }

    return true;
};