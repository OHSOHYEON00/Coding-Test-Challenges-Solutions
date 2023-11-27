type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    let callCount = 0;

    const map = new Map();

    return function(...args) {

         if (args.length === 0) {
             return callCount; // call count
         } else {             
             const isMemoized = map.get(JSON.stringify(args)); // check the Map if the inputs is memoized

             if (isMemoized !== undefined) {
                 return isMemoized; // value from Map
             } else {
                 const newRes = fn(...args);
                 callCount += 1;

                 // add newRes to Map
                 map.set(JSON.stringify(args), newRes);

                 return newRes;
             }
         }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */