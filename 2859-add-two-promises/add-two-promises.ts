type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
	const [ans1, ans2] = await Promise.all([promise1, promise2]);

    /**
        * both return a Single Promise.

        Promise.all
        - Return when all promises in input are fulfill.
        - If any Promise is failed, then there are no return(Only return the first error of rejections).

        Promise.allSettled
        - Return when all promises in input are settled (means finished to execute).
        - If any Promise is failed, it returns the rejected Object with status "rejected" and reason.
     */

    return ans1 + ans2;
};