const path = require("path");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const filePath = path.resolve(__dirname, "example.txt");
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const count = +input[0],
  list = input.slice(1, input.length);

const getNameBirth = (str) => {
  const [name, day, month, year] = str.split(" ");

  return {
    name,
    birth: new Date(Date.UTC(year, month - 1, day)),
  };
};

const first = getNameBirth(list[0]);

if (count === 1) {
  console.log(first.name);
  console.log(first.name);
} else {
  let min = first;
  let max = first;

  list.forEach((val, index) => {
    if (index > 0) {
      const { birth } = getNameBirth(val);

      if (birth > min.birth) min = getNameBirth(val);
      if (birth < max.birth) max = getNameBirth(val);
    }
  });

  console.log(min.name, max.name);
}
