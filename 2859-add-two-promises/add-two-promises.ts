type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
	const ans1 = await promise1;
    const ans2 = await promise2;

    return ans1 + ans2;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */