const { count } = require("console");
const path = require("path");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const filePath = path.resolve(__dirname, "example.txt");
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const processInput = () => {
  const testCase = +input[0];
  const cases = [];
  let index = 1;

  for (let i = 0; i < testCase; i++) {
    const [M, N, K] = input[index].split(" ").map(Number);
    const positions = input
      .slice(index + 1, index + 1 + K)
      .map((l) => l.split(" ").map(Number));
    cases.push({ M, N, positions });

    index += K + 1;
  }

  return cases;
};

const cases = processInput();

cases.forEach(({ M, N, positions }) => {
  const field = Array.from({ length: M }, () => Array(N).fill(0));
  const visited = Array.from({ length: M }, () => Array(N).fill(false));

  positions.forEach(([x, y]) => {
    field[x][y] = 1;
  });

  const dfs = (x, y) => {
    const dir = [
      [-1, 0],
      [1, 0],
      [0, 1],
      [0, -1],
    ];

    visited[x][y] = true;

    dir.forEach(([dx, dy]) => {
      const nx = x + dx,
        ny = y + dy;

      // 인접한 배추 위치가 유효하고 배추가 있고 방문하지 않은 경우에만 탐색 진행
      if (
        nx >= 0 &&
        nx < M &&
        ny >= 0 &&
        ny < N &&
        field[nx][ny] === 1 &&
        !visited[nx][ny]
      ) {
        dfs(nx, ny);
      }
    });
  };

  let count = 0;

  // 0,0 좌표부터 탐색 진행
  // 해당 위치에 배추가 있고 방문하지 않은 경우 dfs로 탐색
  for (let x = 0; x < M; x++) {
    for (let y = 0; y < N; y++) {
      if (field[x][y] === 1 && !visited[x][y]) {
        dfs(x, y);
        count++;
      }
    }
  }
  console.log(count);
});
