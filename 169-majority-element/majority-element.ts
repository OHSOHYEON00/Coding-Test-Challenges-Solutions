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