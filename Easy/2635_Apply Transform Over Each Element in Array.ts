function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const result: number[] = [];

  for (let j = 0; j < arr.length; j++) {
    const res = fn(arr[j], j);
    result.push(res);
  }

  return result;
}
