function removeElement(nums: number[], val: number): number {
   let i=0;

    nums.forEach(num => {
        if (num !== val) {
            nums[i] = num;
            i++
        }
    });

    return i
};