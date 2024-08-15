const path = require("path");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const filePath = path.resolve(__dirname, "example.txt");
let changes = require("fs").readFileSync(filePath).toString().trim();

changes = +changes;

if (changes < 5) {
  if (changes % 2 === 0) console.log(`${changes / 2}`);
  else console.log("-1");
} else {
  let fiveCoin = Math.floor(changes / 5);
  let twoCoin = 0;

  while (fiveCoin >= 0) {
    let left = changes - 5 * fiveCoin;
    if (left % 2 === 0) {
      twoCoin = left / 2;
      console.log(`${fiveCoin + twoCoin}`);
      return;
    } else {
      fiveCoin--;
    }
  }

  console.log(`-1`);
}
