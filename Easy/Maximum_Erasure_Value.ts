// https://leetcode.com/problems/maximum-erasure-value/


// ## Time Limit Exceeded !!
// function maximumUniqueSubarray(nums: number[]): number {
    
//     const origin = nums.concat();
//     const oriLength = origin.length;
    
//     let current = 0;
//     let result: number = 0;
    
//     while (current < oriLength) {
//         const tmp: number[] = [];
        
//         for (let i=current; i<oriLength; i++) {
//             const oriNum = origin[i];
        
//              if (!tmp.includes(oriNum)) {
//                 tmp.push(oriNum);
//              } else {
//                  const index = origin.indexOf(oriNum, current);
                 
//                  current = index+1;  // make next for loop starts from next element
//                  break;
//              }
            
//             if (i === oriLength - 1) { // creterion for stopping while loof
//                 current = oriLength;
//             }
//         }
        
//         const tmpValue = tmp.reduce((arr, cur) => arr+cur);
        
//         if (result < tmpValue) { // change result when we fine optimal subarray instead prev
//             result = tmpValue;
//         }
//     }
  

//     return result

// };