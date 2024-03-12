function summaryRanges(nums: number[]): string[] {

    const smallest: number[][] = [];

    let add: number[] = [];

    for(let i=0; i<nums.length; i++) {

        if (!add.length) add.push(nums[i]);
        
        if (Math.abs(nums[i] - nums[i+1]) > 1 || i === nums.length-1) {
            if (add[0] !== nums[i]) add.push(nums[i]);
            smallest.push(add);
            add = [];
        }
    }

    return smallest.map(arr => {
        if (arr.length === 1) {
            return `${arr[0]}`;
        } else {
            return `${arr[0]}->${arr[1]}`;
        }
    })
    
};