const path = require("path");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const filePath = path.resolve(__dirname, "example.txt");
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const n = +input[0];

const fibonacci = [0, 1];

for (let i = 2; i <= n; i++) {
  fibonacci[i] = BigInt(fibonacci[i - 1]) + BigInt(fibonacci[i - 2]);
}

console.log(fibonacci[n].toString());
