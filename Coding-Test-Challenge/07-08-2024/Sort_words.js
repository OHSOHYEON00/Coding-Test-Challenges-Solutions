const path = require("path");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const filePath = path.resolve(__dirname, "example.txt");
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const count = +input[0];
let list = input.slice(1, input.length);

if (count === 1) {
  list.forEach((v) => console.log(v));
} else {
  const set = new Set(list);
  let setList = Array.from(set);

  if (set.length === 1) {
    setList.forEach((v) => console.log(v));
  } else {
    setList.sort((a, b) => {
      if (a.length !== b.length) {
        return a.length - b.length;
      } else {
        if (a.localeCompare(b) === 1) {
          // a is higher
          return 1;
        } else if (a.localeCompare(b) === -1) {
          // a is lower
          return -1;
        } else return 1;
      }
    });

    setList.forEach((v) => console.log(v));
  }
}
