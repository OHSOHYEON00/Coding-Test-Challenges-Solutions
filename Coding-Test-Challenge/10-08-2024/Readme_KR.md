# 나무조각

문제 링크: https://www.acmicpc.net/problem/2947

# 📌 문제 탐색하기

1,2,3,4,5가 무작위 순서로 들어온다. 해당 값을 아래 룰을 따라 1,2,3,4,5 순서로 만들어야 한다.

```
1. 첫 번째 조각의 수가 두 번째 수보다 크다면, 둘의 위치를 서로 바꾼다.
2. 두 번째 조각의 수가 세 번째 수보다 크다면, 둘의 위치를 서로 바꾼다.
3. 세 번째 조각의 수가 네 번째 수보다 크다면, 둘의 위치를 서로 바꾼다.
4. 네 번째 조각의 수가 다섯 번째 수보다 크다면, 둘의 위치를 서로 바꾼다.
5. 만약 순서가 1, 2, 3, 4, 5 순서가 아니라면 1 단계로 다시 간다.
```

위치를 바꿀 때마다 조각의 순서를 출력하는 프로그램.

### 조건

- 조각에 쓰여있는 수 (1<= 수 <= 5), 중복없음.
- 첫 순서는 1,2,3,4,5가 아니다.

## 접근 방법

## 가능한 시간복잡도

O(nlogn) - 네번째 조각과 다섯번째 조각까지 모두 비교했는데 순서가 1,2,3,4,5가 아니라면 1 단계로 다시 가기 때문에 O(N)보다 크다.

# 📌 코드 설계하기

룰 대로 잘 구현하되, 아래의 것들을 주의한다.

- while 문 break 잘 벗어나도록 탈출 조건문 설정
- 비교해야하는 값, 순서 지켜서 비교하기

# 📌 시도 회차 수정 사항 (Optional)

### 1회차

- 틀림, 출력하는 코드 조건을 꼼꼼히 잘 보자

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
  .split(" ")
  .map((v) => +v);

let i = 0;

while (input.toString() !== "1,2,3,4,5") {
  if (i >= input.length) {
    i = 0;
  }

  if (input[i] > input[i + 1]) {
    [input[i], input[i + 1]] = [input[i + 1], input[i]];
    input.forEach((v) => console.log(v));
  }

  i++;
  if (input.toString() === "1,2,3,4,5") break;
}
```
