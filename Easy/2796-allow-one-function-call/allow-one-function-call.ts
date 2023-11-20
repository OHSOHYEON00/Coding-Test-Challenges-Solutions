type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

function once(fn: Function): OnceFn {
    // console.log('main func called'); // called 0
   
   let isCalled = false;

	return function (...args) {
        // console.log('sub func called'); // called 1, 2

        if (!isCalled) {
            isCalled = true;
            return fn(...args);
        } else {
            return undefined;
        }
	};
}

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */