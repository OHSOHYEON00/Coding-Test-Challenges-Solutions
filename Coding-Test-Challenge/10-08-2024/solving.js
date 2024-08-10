const path = require("path");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const filePath = path.resolve(__dirname, "example.txt");
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

let i = 0;

while (input.toString() !== "1,2,3,4,5") {
  if (i >= input.length) {
    i = 0;
  }

  if (input[i] > input[i + 1]) {
    [input[i], input[i + 1]] = [input[i + 1], input[i]];
    input.forEach((v) => console.log(v));
  }

  i++;
  if (input.toString() === "1,2,3,4,5") break;
}
