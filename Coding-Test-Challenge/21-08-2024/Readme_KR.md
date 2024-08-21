# 피보나치 수열

문제 링크: https://www.acmicpc.net/problem/2748

# 📌 문제 탐색하기

### 조건

## 접근 방법

피보나치 수열 문제로, 작은 계산을 반복하여 n번째의 피보나치 수를 구한다.
여기서 작은 계산은 `F(n) = F(n-1) + F(n-2)`를 의미한다.

## 가능한 시간복잡도

이미 계산된 피보나치 수열은 메모이제이션을 사용해 배열에 저장했기 때문에 O(n)이다.

## 알고리즘 선택

특정 범위까지의 값을 구하기 위해 다른 범위까지의 값을 이용하여 효율적으로 값을 구하는 DP(Dynamic Programming)을 사용했다.

# 📌 코드 설계하기

- 계산된 피보나치 수열 값을 저장할 배열 선언한다.
- n값까지 피보나치 수열 값을 계산하며 값을 구한다.

# 📌 시도 회차 수정 사항 (Optional)

### 1회차

- 틀림, 로직은 틀리지 않았는데 숫자가 커짐에 따라 정확히 + 로직을 수행하지 않음을 발견함.
  주요 원인은 JS의 Number 타입의 정수 범위가 `±2^53 (약 ±9,007,199,254,740,992)`까지만 정확히 표시됨에 따라 정수의 정확성이 보장되지 않음.
  -> BigInt 사용해 해결

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

const n = +input[0];

const fibonacci = [0, 1];

for (let i = 2; i <= n; i++) {
  fibonacci[i] = BigInt(fibonacci[i - 1]) + BigInt(fibonacci[i - 2]);
}

console.log(fibonacci[n].toString());
```
