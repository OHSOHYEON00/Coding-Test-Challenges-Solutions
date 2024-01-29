function lengthOfLastWord(s: string): number {
    let arr = s.split(' ');

    arr = arr.filter((str) => str.length > 0);

    return (arr[arr.length - 1]).length
};