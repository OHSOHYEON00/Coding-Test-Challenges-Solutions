const path = require("path");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const filePath = path.resolve(__dirname, "example.txt");
const [info, list] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [candidates, winner] = info.trim().split(" ");
let scores = list
  .trim()
  .split(" ")
  .map((v) => +v);

if (candidates === "1") console.log(scores[0]);
else {
  scores.sort((a, b) => b - a);

  console.log(scores[winner - 1]);
}
