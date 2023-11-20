// https://leetcode.com/problems/two-sum/submissions/

function twoSum(nums: number[], target: number): number[] {
    
    const output: number[] = []; 
    
    for (let i=0; i<nums.length; i++) {
        const item = nums[i];
        
            const isValid = nums.filter(num => target - item === num).length > 0;
            const index = nums.indexOf(target - item);
            
            const isSame = i === index;
            
            
            if (isValid && !isSame) {
                output.push(i);
                output.push(index);
                break;
            } 
    }

    return output;
};