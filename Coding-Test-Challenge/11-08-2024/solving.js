const path = require("path");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const list = input.slice(1, input.length).map((v) => {
  const [w, h] = v.split(" ");
  return { w: +w, h: +h, rank: 1 };
});

list.forEach((per) => {
  for (let i = 0; i < list.length; i++) {
    if (per.w < list[i].w && per.h < list[i].h) per.rank += 1;
  }
});

console.log(list.map((v) => v.rank).join(" "));
