const path = require("path");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

let sortedInput = input.sort((a, b) => a - b);

const targetSum = sortedInput.reduce((a, b) => a + b) - 100;

let left = 0,
  right = sortedInput.length - 1;

while (left < right) {
  const currentSum = sortedInput[left] + sortedInput[right];

  if (currentSum === targetSum) {
    break;
  } else if (currentSum < targetSum) {
    left++;
  } else {
    right--;
  }
}

sortedInput
  .filter((_, index) => index !== left && index !== right)
  .sort((a, b) => a - b)
  .map((v) => console.log(v));
