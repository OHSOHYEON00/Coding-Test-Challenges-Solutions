const path = require("path");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const filePath = path.resolve(__dirname, "example.txt");
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

// 입력 처리
const inputs = input.splice(2, input.length);

const connection = {};
const set = new Set();

inputs.forEach((con) => {
  const [key, connected] = con.split(" ");
  connection[key] = connection[key]
    ? [...connection[key], +connected]
    : [+connected];

  connection[connected] = connection[connected]
    ? [...connection[connected], +key]
    : [+key];
});

// 검사
function check(com) {
  set.add(com);

  if (!connection[com]) return;

  connection[com].forEach((c) => {
    if (![...set.keys()].includes(c)) {
      check(c);
    } else return;
  });
}

if (connection[1]) {
  connection[1].forEach((c) => {
    if (![...set.keys()].includes(c)) {
      check(c);
    } else return;
  });
}

console.log([...set.keys()].filter((v) => v !== 1).length);
