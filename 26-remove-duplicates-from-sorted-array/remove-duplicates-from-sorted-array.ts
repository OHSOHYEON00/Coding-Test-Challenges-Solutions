function removeDuplicates(nums: number[]): number {
    let i=0;

    nums.forEach((num, idx) => {
        if (num !== nums[idx-1]) {
            nums[i] = num;
            i++;
        }
    });

    return i
};