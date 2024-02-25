function search(nums: number[], target: number): number {

    let min = 0, max = nums.length;
    let pivot = nums[max-1] >= nums[min] ? max-1 : undefined; // max number in original array

    // Get 2 scopes that are sorted in ascending order
    while (min<max) {
        const mid = Math.floor((min+max)/2);

        if (nums[mid] > nums[mid+1]) {
            pivot = mid;
            break;
        } else {
            if (nums[min] < nums[mid]) {
                min = mid;
            } else {
                max = mid;
            }
        }
    }

    if (target >= nums[0] && target <= nums[pivot]) {
        min = 0;
        max = pivot;
    } else if (target >= nums[pivot+1] && target <= nums[nums.length-1]) {
        min = pivot+1;
        max = nums.length-1;
    } else {
        return -1;
    }

    while(min+1 < max) {
        const mid = Math.floor((min+max)/2);

        if (nums[mid] >= target) {
            max = mid;
        } else {
            min = mid;
        }
    }

   if (nums[min] === target) {
       return min;
   } else if (nums[max] === target) {
       return max;
   } else {
       return -1;
   }
};