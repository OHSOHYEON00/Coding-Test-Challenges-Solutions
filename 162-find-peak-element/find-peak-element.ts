function findPeakElement(nums: number[]): number {

    let min = 0, max = nums.length;

    console.log(nums)

    while (min+1 < max) {
        const mid =  Math.floor((max+min)/2);

        if (nums[mid-1] === undefined) {
             min=mid;
        }
        if (nums[mid+1] === undefined) {
             max=mid;
        }

        if (nums[mid] > nums[mid-1]) {
            min = mid;
        } else {
            max = mid;
        }
    }
    
    return min;
};