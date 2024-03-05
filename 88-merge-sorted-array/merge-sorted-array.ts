/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {

    if (m === 0) {
        nums1.length = 0;
        nums1.push(...nums2);
    } else if (n !== 0) {
        nums1.splice(m, (nums1.length - m + 1)); 
        nums1.push(...nums2);
        nums1.sort((a,b) => a-b);
    }
};