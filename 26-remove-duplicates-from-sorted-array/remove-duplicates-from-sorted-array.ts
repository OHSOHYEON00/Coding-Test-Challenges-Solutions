function removeDuplicates(nums: number[]): number {
    const duplicated = [];
    let i=0;

    nums.forEach(num => {
        if (!duplicated.includes(num)) {
            duplicated.push(num);
            nums[i] = num;
            i++;
        }
    });

    return i
};