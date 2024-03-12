function containsNearbyDuplicate(nums: number[], k: number): boolean {
    

    if (nums.length === 1 || k === 0) return false;


    // ref. https://leetcode.com/problems/contains-duplicate-ii/solutions/3863824/sliding-window-o-n-time-o-1-space
    const set = new Set<number>(); // set only has elements which its distance(its index to current i) within k.

    for (let i=0; i<nums.length; i++) {
        if (set.has(nums[i])) return true;// satisfy with distance within k and nums[i] === nums[j]
        set.add(nums[i]); // if it's not in the set then add it
        if (set.size > k) set.delete(nums[i-k]); // when distance is over k, then remove value which its index is without k
    }

    return false;
};