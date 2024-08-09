const path = require("path");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const filePath = path.resolve(__dirname, "example.txt");
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
