const path = require("path");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const filePath = path.resolve(__dirname, "example.txt");
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [, , start] = input[0].split(" ");

const connects = input.splice(1, input.length).map((v) => v.split(" ")),
  obj = {};

const createGraph = (con, save) => {
  con.forEach((v) => {
    const [s, n] = v;
    save[s] = save[s] ? [...save[s], n] : [n];
    save[n] = save[n] ? [...save[n], s] : [s];
  });

  for (const key in save) {
    save[key].sort((a, b) => a - b);
  }
  return save;
};

const graph = createGraph(connects, obj);

function dfs(node, gr, arr) {
  while (true) {
    if (arr.includes(node)) break;

    arr.push(node);

    if (gr[node]) {
      gr[node].forEach((v) => dfs(v, gr, arr));
    }
  }

  return arr.map((v) => +v);
}

function bfs(s, gr, arr) {
  const toVisit = [];

  toVisit.push(s);

  while (toVisit.length > 0) {
    s = toVisit.shift();

    if (gr[s]) {
      gr[s].forEach((v) => {
        if (!arr.includes(v)) {
          arr.push(v);
          toVisit.push(v);
        }
      });
    }
  }

  return arr;
}

const dfsArr = dfs(start, graph, []).join(" ");
const bfsArr = bfs(start, graph, [start]).join(" ");
console.log(dfsArr);
console.log(bfsArr);
