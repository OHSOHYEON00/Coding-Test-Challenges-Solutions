# 순열 사이클

문제 링크: https://www.acmicpc.net/problem/10451

# 📌 문제 탐색하기

해당 문제는 순열의 순서와 값을 바탕으로 `연결된 그래프의 개수`를 찾는 문제이다. 결과적으로 `dfs`를 사용할 수 있다.

순열 요소 값은 1부터 시작하기 때문에 0부터 시작하는 index 값과 혼동하지 않도록 주의해야한다.

### 조건

1. 입력

- 첫째 줄: T (테스트 케이스의 개수)

각 테스트 케이스의

- 첫째 줄: N (순열의 크기, 2 ≤ N ≤ 1,000)
- 둘째 줄: 순열

2. 출력

- 각 테스트 케이스마다 순열 사이클 개수 출력

## 접근 방법

- 입력받은 순열의 순서를 나타내는 1부터 n까지의 값은 index+1 값으로 나타낼 수 있다.

- 순열 사이클 개수를 찾기 위해서는 모든 순열을 탐색해야한다. -> for문을 사용해서 탐색을 진행한다. 이때, 그래프 생성이 가능하다면 dfs를 사용해서 연결된 모든 요소를 탐색한다.

- 탐색을 시작할 때마다 count++를 진행한다.

- 순열 크기와 동일한 visited 배열을 생성하여 해당 요소를 검사했는지 검사한다.

## 가능한 시간복잡도

- 탐색에 필요한 반복문: O(N), N은 순열의 크기를 의미한다.
- dfs: O(V+E), V는 정점의 개수 즉 순열의 개수, E는 간선의 개수를 의미한다.

## 알고리즘 선택

dfs

# 📌 코드 설계하기

### 입력 처리

각 테스트 케이스 별로 `순열의 크기`, `순열`, `순열의 크기와 동일한 visited 배열` 변수를 생성한다.

### 탐색

순열의 크기만큼 반복문을 돌며 해당 요소가 이미 방문했는지 여부를 판단한다 `visited[id]`. 이때, 방문하지 않았을 경우, 다음과 같이 탐색을 시작한다.

- 새로운 그래프 사이클이 시작되기 떄문에 result++ 를 한다.
- 해당 요소 `visited[id]` 값을 true로 바꾼다.
- dfs를 통해 그래프 탐색을 시작한다.

### dfs 탐색

해당 요소가 이미 방문하지 않았다면, 위의 탐색 과정과 동일하게 visited[num] = true로 변경하고, dfs를 계속 진행한다.

# 📌 시도 회차 수정 사항 (Optional)

### 1회차

- 틀림, 여러 개의 테스트 케이스를 처리하는 과정에서 배열을 자르는 부분에서 오류가 있었다.

### 2회차

- 성공

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

const testCase = +input[0],
  counts = [],
  permutation = [];

let inputs = input.slice(1, input.length);

for (let i = 0; i < testCase; i++) {
  counts.push(+inputs[0]);
  permutation.push(inputs[1]);

  inputs = inputs.slice(2, inputs.length);
}

for (let i = 0; i < testCase; i++) {
  let result = 0;

  const count = counts[i],
    arr = permutation[i].split(" ").map(Number);
  const visited = Array.from({ length: count }).fill(false);

  function dfs(num) {
    if (num > 0 && !visited[num - 1]) {
      visited[num - 1] = true;
      dfs(arr[num - 1]);
    }
  }

  for (let id = 0; id < count; id++) {
    if (!visited[id]) {
      result++;
      visited[id] = true;
      dfs(arr[id]);
    }
  }

  console.log(result);
}
```
