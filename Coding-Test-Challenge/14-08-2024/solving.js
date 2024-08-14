const path = require("path");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const filePath = path.resolve(__dirname, "example.txt");
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let total = +input[0],
  seats = input[1];

if (!seats.includes("L")) {
  console.log(total);
} else {
  let newSeats = "*";
  let isCouple = 0;

  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === "S") {
      newSeats += `${seats[i]}*`;
    } else if (seats[i] === "L") {
      if (isCouple === 0) {
        isCouple = 1;
        newSeats += `${seats[i]}`;
      } else {
        isCouple = 0;
        newSeats += `${seats[i]}*`;
      }
    }
  }

  let result = 0;

  for (let i = 0; i < newSeats.length; i++) {
    if (newSeats[i] === "*") {
      i++;
      result++;
    } else {
      if (newSeats[i + 1] === "*") {
        result++;
      }
      i++;
    }
  }

  console.log(result);
}
