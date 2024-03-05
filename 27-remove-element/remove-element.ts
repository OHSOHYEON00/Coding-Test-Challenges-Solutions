function removeElement(nums: number[], val: number): number {
  while (nums.includes(val)) {
        const idx = nums.findIndex(num => num === val);
        nums.splice(idx, 1);
    }

    return nums.length;
};