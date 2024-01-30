function majorityElement(nums: number[]): number {

    // don't need to care about to get exact count
    // Goal: finding the majority number

    let candidate: number = 0;
    let count = 0;

    nums.forEach((num) => {
        if (count === 0) {
            candidate = num;
        }

        count += (num === candidate) ? 1 : -1;
    })

    return candidate;

};



/**
function majorityElement(nums: number[]): number {
    
    let result = nums.concat();
    result = result.sort((a,b) => a-b);

    let max = 0, output = 0;

    result.forEach((num, index) => {
        const newCount = result.lastIndexOf(num) + 1 - index;
        
        if (max < newCount ) {
            max = newCount;
            output = num;
            index = result.lastIndexOf(num) + 1;
        }

    })

    return output;
};
 */