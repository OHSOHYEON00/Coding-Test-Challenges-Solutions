/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {

    const length = nums.length;
    let slicedCount = k;

    if (k > 0 && length !== k) {  
        if (length > k) {
            // use K
        } else {
            if (k % length > 0) {
                slicedCount = k % length;
            }
        }

        const sliced = nums.slice(-slicedCount);
        nums.splice(length-slicedCount);

        nums.splice(0,0, ...sliced);
    }
};