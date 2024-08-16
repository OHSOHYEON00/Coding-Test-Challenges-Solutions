const path = require("path");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const filePath = path.resolve(__dirname, "example.txt");
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [, basketSize] = input[0].split(" ").map((v) => +v),
  appleOnScreen = input.slice(2, input.length).map((v) => +v);

let start = 1,
  end = basketSize,
  count = 0;

const minus = end - start;

appleOnScreen.forEach((apple) => {
  if (apple < start) {
    count += start - apple;
    start = apple;
    end = minus + start; // end 도 함께 이동
  } else if (apple > end) {
    count += apple - end;
    end = apple;
    start = end - minus; // start도 함께 이동
  }
});

console.log(count);
