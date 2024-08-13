const path = require("path");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const filePath = path.resolve(__dirname, "example.txt");
let change = 1000 - +require("fs").readFileSync(filePath).toString().trim();

let count = 0;

function calculate(coin) {
  if (change >= coin) {
    const cnt = Math.floor(change / coin);
    count += cnt;
    change -= coin * cnt;
  }
}

let coins = [500, 100, 50, 10, 5, 1];
coins.sort((a, b) => b - a);

coins.forEach((coin) => {
  calculate(coin);
});

console.log(count);
