function searchInsert(nums: number[], target: number): number {

    let min = 0;
    let max = nums.length;
    let middle = Math.floor((max-min) / 2);
    let result = 0;

    if (target < nums[min]) {
        return 0;
    } else if (target > nums[max - 1]) {
        return max;
    }

    while(true) {
        const current = nums[middle];
        
        if (current === target) {
            result = middle;
            break;
        } else {
            if (middle === min) {
                result = middle + 1;
                break;
            }

           if (current > target) {
               max = middle;
                middle = Math.floor((max-min) / 2);
           } else {
               min = middle;
               middle = middle + Math.floor((max-min) / 2);
           }
        }
    }
    return result;
};