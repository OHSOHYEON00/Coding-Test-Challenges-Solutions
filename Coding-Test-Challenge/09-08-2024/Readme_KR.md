# 커트라인

문제 링크: https://www.acmicpc.net/problem/25305

# 📌 문제 탐색하기

상 받는 커트라인 값 구하기, 커라인은 상 받은 사람 중 가장 낮은 점수의 사람을 뜻한다.
상을 받는 기준은 점수가 높은 순이다.

### 조건

1. 인풋

- 1 <= 응시자 수(N) <= 1,000
- 1<= 상 받는 사람 수(k) <= N
- 0 <= 각 학생의 점수(x) <= 10,000

2. 출력
   커트라인 출력

## 접근 방법

1. 학생 점수 기준 내림차순으로 정렬한다.
2. 배열의 k-1 인덱스 값이 커트라인이다.

## 가능한 시간복잡도

점수 기준으로 내림차순 정렬하기 때문에 다차원배열이 필요하지 않다.
정렬의 시간복잡도는 O(nlogN)이다.

인덱스 값을 통한 배열의 엘리먼트 접근은 O(1)이다.

# 📌 코드 설계하기

1. 학생 점수 기준 내림차순으로 정렬
2. 배열의 k-1 인덱스 값 리턴

# 📌 정답 코드

```
const path = require("path");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const filePath = path.resolve(__dirname, "example.txt");
const [info, list] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [candidates, winner] = info.trim().split(" ");
let scores = list
  .trim()
  .split(" ")
  .map((v) => +v);

if (candidates === "1") console.log(scores[0]);
else {
  scores.sort((a, b) => b - a);

  console.log(scores[winner - 1]);
}
```
