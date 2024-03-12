function summaryRanges(nums: number[]): string[] {

    const smallest: string[] = [];

    let add: number[] = [];

    const formatRange = (range: number[]): string => {
        return range.length > 1 ? `${range[0]}->${range[1]}` : `${range[0]}`;
    }

    for(let i=0; i<nums.length; i++) {

        if (!add.length) add.push(nums[i]);
        
        if (Math.abs(nums[i] - nums[i+1]) > 1 || i === nums.length-1) {
            if (add[0] !== nums[i]) add.push(nums[i]);
            smallest.push(formatRange(add));
            add = [];
        }
    }


    return smallest;
    
};