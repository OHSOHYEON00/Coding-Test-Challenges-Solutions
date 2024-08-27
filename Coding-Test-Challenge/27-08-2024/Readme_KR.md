# DFS/BFS

문제 링크: https://www.acmicpc.net/problem/1260

# 📌 문제 탐색하기

### 조건

## 접근 방법

DFS, BFS는 모두 그래프 탐색 알고리즘이기 때문에 탐색 전 세팅은 동일하다.
다만 `탐색 순서`에 다른 점이 있기 때문에 이를 유의해서 설계헤야한다.

### DFS / BFS 공통

- 우선 입력 값에 따라 그래프를 배열 형식으로 저장한다.
- 방문한 순서 저장을 위한 visited 배열을 선언한다.

### DFS 검색

- 방문해야하는 순서 저장을 위해 Stack 사용
- 정점 방문 시, 연결된 정점 중 작은 번호 순으로 끝 정점에 다다를 때까지 방문한다.

### BFS 검색

- 방문해야하는 순서 저장을 위해 Queue 사용
- 정점 방문 시, 연결된 모든 정점을 먼저 방문한다. 이 때, 방문한 정점과 연결된 또다른 정잠이 있을 경우 Queue에 추가한다.

## 가능한 시간복잡도

- 정점 번호 정렬: O(nlogN)
- DFS: O(V+E)
- BFS: O(V+E)
  여기서 V는 정점 수, E는 간선 수를 의미한다.

## 알고리즘 선택

DFS, BFS

# 📌 코드 설계하기

### 입력 처리

1. 필요한 정보: 탐색 시작할 번호, 그래프 구조 저장 `obj: {정점}: [연결된 정점들]`

- 연결된 정점 리스트 저장 종료 직전, 작은 번호 순으로 정렬한다.

2. 방문한 순서 저장: visitied 배열 선언
3. 가야하는 곳 순서 저정: toVisit 배열 선언

- DFS는 Stack이기 때문에 push, pop 내장함수를 이용하여 쉽게 FILO 구현 가능
- BFS는 Queue이기 때문에 toVisit 배열에 값을 저장할 때 reverse() 하여 저장하도록 한다.

### DFS

1. toVisit.pop() 정점 번호를 가져온다.

- 이때, 방문해야할 정점이 visited 배열에 있는 경우, 탐색 중지 return;

2. visited 배열에 탐색한 정점 번호 추가를 추가한다.
3. obj[정점 번호] 의 값을 가져와 순서대로 dfs 탐색을 계속 진행한다.

- 이때, 값이 없다면 진행하지 않는다.

### BFS

0. 시작 정점 번호 toVisit 배열에 추가한다.
1. toVisit.pop() 정점 번호를 가져온다.

- 이때, 방문해야할 정점이 visited 배열에 있는 경우, 탐색 중지 return;

2. visited 배열에 탐색한 정점 번호 추가를 추가한다.
3. obj[정점 번호] 의 값을 가져와 toVisit에 reverse() 후 저장한다.

- 값이 없는 경우 추가하지 않는다.

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
```
