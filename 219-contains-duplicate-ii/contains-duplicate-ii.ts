function containsNearbyDuplicate(nums: number[], k: number): boolean {
    
    if (nums.length === 1 || k === 0) return false;

    // 1. make hashmap Map<value of nums, Array of indexs in nums>
    const map = new Map<number, number[]>();

    nums.forEach((num, index) => {
      if (map.get(num)) map.set(num, [...map.get(num), index]);
      else map.set(num, [index]);
    })

    // 2. filter to remain only if the array.length > 1
    const sameArr = [...map.values()].filter((value) => value.length > 1);

    /**
        3. double looping all indexs ([0,1,2,3] -> 0,1 / 0,2 / 0,3 / 1,2 / 1,3 ...)
        - if abs(i-j) > k, then j will be next round
        - if find only one, then stop all looping and return true
     */
    let result = false;

     sameArr.forEach(arr => {
        const isDistinct = arr.find((el, index) => {
            return arr[index+1] !== undefined &&  Math.abs(el-arr[index+1]) <= k;
        });

        if (isDistinct !== undefined) result = true;
     })

    return result;
};