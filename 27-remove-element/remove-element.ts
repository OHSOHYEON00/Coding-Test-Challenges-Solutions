function removeElement(nums: number[], val: number): number {
    const originLength = nums.length;

    while (nums.includes(val)) {
        const idx = nums.findIndex(num => num === val);
        nums.splice(idx, 1);
    }

    for(let i=0; i<nums.length - originLength; i++) {
        nums.push(0);
    }

    return nums.length;
};