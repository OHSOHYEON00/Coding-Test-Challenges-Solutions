const path = require("path");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const filePath = path.resolve(__dirname, "example.txt");
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

// 입력값 처리
const testCase = input[0],
  cases = input.splice(1, input.length),
  test = [];

// 가장 높은 층수까지만 계산
let max = test[0];

for (let i = 0; i < testCase; i++) {
  test[i] = [cases[i * 2], cases[i * 2 + 1]];

  if (!max || max[0] < test[i][0]) max = test[i];
}

const people = [];

const getPeople = (floor, num) => {
  for (let i = 0; i <= floor; i++) {
    let nums = [];

    if (i === 0) {
      nums = Array.apply(null, Array(14)).map((_, index) => {
        return index + 1;
      });
    } else {
      for (let j = 0; j < num; j++) {
        nums[j] = (j > 0 ? nums[j - 1] : 0) + people[i - 1][j];
      }
    }

    people[i] = nums;
  }
};
getPeople(max[0], max[1]);

test.forEach((v) => {
  const [f, n] = v;
  console.log(people[f][n - 1]);
});
