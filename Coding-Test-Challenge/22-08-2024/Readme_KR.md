# 부녀회장이 될테야

문제 링크: https://www.acmicpc.net/problem/2775

# 📌 문제 탐색하기

주어진 k층 n호에 몇 명이 사는지는 구하는 문제이다.
각 k층의 n호에 사는 사람은 `k층의 (n-1)호 사람 수 + (k-1)층의 n호 사람 수`이다.

### 조건

## 접근 방법

입력받은 최대 층수의 호수를 저장하여 해당 위치까지 DP 테이블에 사는 인구 수를 저장한다.
출력값을 위해서는 DP 테이블에 저장된 인구 수에 접근하여 출력한다.

- 입력된 k층의 n호 사람 수를 구하기 위해 1층부터 n호까지만 사람 수를 구해 저장한다. 저장은 이차원 배열을 사용한다 [층][호수]

-> n호까지만 저장하는 이유는 나중에도 쓰이지 않기 때문에 굳이 n+1,n+2... 까지 계산할 필요는 없기 때문이다.

## 가능한 시간복잡도

1. 최대 층수의 n호수까지 인구 수를 계산하는 `getPeople` 함수의 시간 복잡도

- 이 함수는 각 층과 각 호를 방문하며 인구 수를 계산한다.
- 최대 층수 F와 최대 호수 N이 주어졌을 때, 이 함수의 시간 복잡도는 O(F \* N)이다.

2. 전체 시간 복잡도

- `getPeople` 함수를 한 번 호출하여 최대 층수까지 계산하는 데 O(F \* N)의 시간이 소요된다.
- 이후 각 테스트 케이스에 대해 결과를 출력하는 부분은 테스트 케이스의 수 T에 비례한다.

전체 시간 복잡도: **O(F \* N + T)**
여기서 F(최대 층수), N(최대 호수), T(테스트 케이스 수) 로, 해당 시간 복잡도는 주어진 문제를 해결할 수 있는 수준이다.

## 알고리즘 선택

한 번 계산된 인구 수를 저장하기 위해 DP테이블을 사용했다. -> Dynamic Programming

# 📌 코드 설계하기

1. 입력 처리

- 입력값을 읽어와 각 테스트 케이스의 층, 호수 정보를 저장한다.
- 최대 층수와 해당 층수의 호수를 찾는다.

2. Dynamic Programming 테이블 초기화

- `people` 배열에 각 층의 인구 수를 저장한다.
- 층별 인구 수 계산을 위해 `getPeople` 함수를 정의한다. 해당 함수는 0층부터 입력값(floor)층의 n번째 호수까지의 사람 수를 계산 후 저장한다.

3. 층별 인구 수 계산

- 0층은 1호~14호까지 각 1명~14명이 살고 있다.
- 1층 이상부터 이전 층의 인구 수를 기반으로 계산한다.
- 위 방식으로 최대 층수의 호수까지 DP테이블을 채운다.

4. 출력

- 각 테스트 케이스에 대해 해당 층과 호수의 인구 수를 출력한다.

# 📌 정답 코드

```
const path = require("path");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

// 입력값 처리
const testCase = input[0],
  cases = input.splice(1, input.length),
  test = [];

// 가장 높은 층수까지만 계산
let max = test[0];

for (let i = 0; i < testCase; i++) {
  test[i] = [cases[i * 2], cases[i * 2 + 1]];

  if (!max || max[0] < test[i][0]) max = test[i];
}

const people = [];

const getPeople = (floor, num) => {
  for (let i = 0; i <= floor; i++) {
    let nums = [];

    if (i === 0) {
      nums = Array.apply(null, Array(14)).map((_, index) => {
        return index + 1;
      });
    } else {
      for (let j = 0; j < num; j++) {
        nums[j] = (j > 0 ? nums[j - 1] : 0) + people[i - 1][j];
      }
    }

    people[i] = nums;
  }
};
getPeople(max[0], max[1]);

test.forEach((v) => {
  const [f, n] = v;
  console.log(people[f][n - 1]);
});
```
