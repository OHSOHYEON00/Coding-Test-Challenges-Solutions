const path = require("path");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const filePath = path.resolve(__dirname, "example.txt");
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const testCase = parseInt(input[0]);
let index = 1;
let results = [];

for (let t = 0; t < testCase; t++) {
  const [N, M] = input[index].split(" ").map(Number);
  const A = input[index + 1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const B = input[index + 2]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  index += 3;

  let count = 0;

  A.forEach((a) => {
    let left = 0,
      right = M;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (B[mid] < a) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    count += left;
  });

  results.push(count);
}

console.log(results.join("\n"));
