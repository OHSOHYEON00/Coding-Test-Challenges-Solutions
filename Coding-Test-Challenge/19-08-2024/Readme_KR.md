# 먹을 것인가 먹힐 것인가

문제 링크: https://www.acmicpc.net/problem/7795

# 📌 문제 탐색하기

문제는 A의 요소가 B의 요소보다 큰 경우의 쌍을 구하는 것이다.
문제 조건에서 주어진 배열의 크기가 20,000이기 때문에 단순 이중 반복문으로는 시간 초과가 발생할 수 있으므로 이분 탐색을 사용해 해결한다.

### 조건

1. 입력

- 첫째 줄에 테스트 케이스의 개수 T
- 각 테스트 케이스의 첫째 줄에는 A의 수 N과 B의 수 M이 주어진다.
- 둘째 줄에는 A의 크기가 모두 주어지며, 셋째 줄에는 B의 크기가 모두 주어진다. 크기는 양의 정수이다. (1 ≤ N, M ≤ 20,000), 중복 가능하다.

2. 출력

- 각 테스트 케이스마다, A가 B보다 큰 쌍의 개수를 출력한다.

## 접근 방법

1. A, B 배열을 입력에서 처리하여 오름차순으로 정렬한다.
2. left, right 포인터를 사용해 이분탐색을 수행한다. Left는 현재까지 a보다 작은 개수를 의미한다.

## 가능한 시간복잡도

B 배열에 대해 이분탐색을 하므로 시간 복잡도는 `O(nlogn)`이다.

## 알고리즘 선택

이분탐색

# 📌 코드 설계하기

# 📌 시도 회차 수정 사항 (Optional)

## 1회차

- 틀림, 이분 탐색에 대한 정확한 구현 자체가 아예 이뤄지지 않음. 개념부터 다시 잡고 다시 구현함.

## 2회차

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

const testCase = parseInt(input[0]);
let index = 1;
let results = [];

for (let t = 0; t < testCase; t++) {
  const [N, M] = input[index].split(" ").map(Number);
  const A = input[index + 1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const B = input[index + 2]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  index += 3;

  let count = 0;

  A.forEach((a) => {
    let left = 0,
      right = M;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (B[mid] < a) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    count += left;
  });

  results.push(count);
}

console.log(results.join("\n"));
```
