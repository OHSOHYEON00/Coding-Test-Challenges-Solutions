const path = require("path");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const filePath = path.resolve(__dirname, "example.txt");
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const testCase = +input[0],
  counts = [],
  permutation = [];

let inputs = input.slice(1, input.length);

for (let i = 0; i < testCase; i++) {
  counts.push(+inputs[0]);
  permutation.push(inputs[1]);

  inputs = inputs.slice(2, inputs.length);
}

for (let i = 0; i < testCase; i++) {
  let result = 0;

  const count = counts[i],
    arr = permutation[i].split(" ").map(Number);
  const visited = Array.from({ length: count }).fill(false);

  function dfs(num) {
    if (num > 0 && !visited[num - 1]) {
      visited[num - 1] = true;
      dfs(arr[num - 1]);
    }
  }

  for (let id = 0; id < count; id++) {
    if (!visited[id]) {
      result++;
      visited[id] = true;
      dfs(arr[id]);
    }
  }

  console.log(result);
}
