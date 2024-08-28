# 유기농 배추

문제 링크: https://www.acmicpc.net/problem/1012

# 📌 문제 탐색하기

해당 문제는 주어진 입력값을 기반으로 `연결된 그래프가 몇 개`인지 파악하는 문제이다.
인접한 배추 군단이 몇 개인지 알아내기 위해서는 입력된 값을 기반으로 각 정점(배추 위치)가 어느 정점(배추 위치)와 연결되어져 있는지를 판단하면 된다.

이때, 연결된 배추 집단을 찾기 위해 주의해야할 점이 있다.

### 조건

1. 입력

- 첫 줄: T (테스트 케이스)
- 둘째 줄: M (배추밭 가로길이, 1<=M<=50), N (배추밭 세로길이, 1<=N<=50), K (배추 위치, 1<=K<=2500)
- K 줄: 배추 위치 X(0 ≤ X ≤ M-1), Y(0 ≤ Y ≤ N-1)

2. 출력
   각 테스트 케이스에 대해 필요한 최소 배추흰지렁이 마리 수 (연결된 배추 집단 수)

## 접근 방법

- (x,y)를 값으로 가지는 노드 그래프는 어떤 타입으로 데이터를 관리하면 좋을꺄?
  -> 방문해야하는 노드, 방문한 노드는 `2차원 배열 [x좌표][y좌표]`로 선언, 관리한다.

- 배추밭 탐색 순서 및 조건
  -> 순서: 임의의 노드를 설정하여 탐색한다.
  -> 조건: **모든** 배추밭을 탐색해야만 한다. 잘못된 조건 설정으로 인해 탐색하지 않은 배추밭 부분이 있다면 오류가 발생할 가능성이 높다.

- 인접한 배추들의 조건은?
  -> `[[-1, 0],[1, 0],[0, 1],[0, -1],]` 배열을 통해 상하좌우 위치를 판단할 수 있다.

## 가능한 시간복잡도

- 배추밭 순회: 이중 for문을 사용하여 `O(M*N)`
- dfs 탐색: `O(V+E)`, 여기서 V: 배추칸 수, E: 인접한 배추 수

코드는 전체 배추밭을 순회하며 각 칸에서 DFS를 실행한다.
DFS는 한 번 방문한 배추 위치를 탐색하지 않기 때문에 최악의 경우는 `O(M*N)` 번 DFS가 호출되는 경우이다.

결론적으로 시간복자도는 `O(M*N)`이다.

## 알고리즘 선택

dfs를 사용하여 배추가 있는 경우, 인접한 배추를 모두 검사할 수 있도록 했다.

# 📌 코드 설계하기

### 입력 처리

splice, shift 등 내장 함수를 사용하여 각 테스트 케이스의 정보를 담은 `infos` , `tests` 배열을 생성 후 값을 저장한다.
탐색은 이중 for문을 사용하여 0,0좌표부터 배추 좌표 (M-1,N-1) 까지 모두 탐색한다.

1. 주어진 배추밭 크기에 따라 2차원 배열 `field`, `visited` 를 선언한다.

- `field`: 입력받은 test 리스트에 있는 베추 위치에는 1, 그 외의 모든 부분에는 0 값을 할당한다.
- `visited`: 초기 모든 배열 요소 값을 false로 할당한다.

2. x = 0, y = 0 좌표부터 순차적으로 검사한다.

- 이중 for문을 사용한다.
- 만약 해당 좌표에 배추가 있고 아직 방문하지 않은 경우라면 dfs로 해딩 위치부터 인접한 위치를 탐색한다.
- 새로운 위치에 배추를 발견했기 때문에 count++ 한다.

3. dfs 함수를 통해 인접한 좌표의 field 값 (배추 여부)을 검사한다.

아래 조건을 모두 맞추는 경우, 재귀함수를 통해 해당 위치의 인접한 배추를 다시 검색한다.

- 인접한 좌표에 배추가 있고
- 유효한 좌표이고 (상하좌우 값에 따라 유효하지 않은 좌표로 접근할 수 있기 때문에)
- 아직 방문하지 않은 위치

## 정리

기본적으로 이차원 배열을 사용해 배추 위치를 저장하고, 이중 for문을 사용하여 모든 배추 위치를 검사할 수 있도록 했다.
또한, 검사할 때 해당 위치를 아직 방문하지 않았고 배추가 있는 경우 그 위치부터 dfs를 통해 인접 배추를 검사한다.
dfs는 인접한 위치 중 배추가 없을 때까지 계속 진행한다. 따라서 이중 for문 안에서 count++해주는 것 (`새로운 배추 집단을 발견했을 때만 count+1`) 이 충분한 이유이다.

# 📌 정답 코드

```
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
```
