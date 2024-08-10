# 덩치

문제 링크: https://www.acmicpc.net/problem/7568

# 📌 문제 탐색하기

배열 내 다른 인덱스 값들과 비교하여 2가지 조건(몸무게, 키가 모두 큰 경우)를 만족하는 횟수를 찾아야 하는 문제이다.

조건에 맞는 정렬 후, 출력에 필요한 카운팅을 잘 해주는 것이 포인트.

### 조건

1. 인풋

- 2 ≤ N(사람 수) ≤ 50
- 10 ≤ x, y(몸무게, 키) ≤ 200

2. 출력

- 나열된 사람의 덩치 등수를 순서대로, 공백문자로 분리하여 출력

- 몸무게, 키가 모두 큰 경우 해당 사람의 등수가 정해진다.
- 같은 등수를 가진 사람은 여러 명이 있을 수 있다.

## 접근 방법

덩치를 비교할 수 없는 경우의 수가 있기 때문에 각 사람은 고유하지 않은 등수를 가지게 된다.

N의 값이 그리 크지 않고 출력 순서가 입력 순서이기 때문에 사전 정렬을 하지 않는다.
따라서 이중 for문을 사용하여 비교한다.

## 가능한 시간복잡도

- 바깥쪽 forEach 루프는 리스트의 각 요소에 대해 한 번씩 반복된다. -> O(N)
- 내부의 for 루프는 리스트의 모든 요소를 다시 비교하므로, 이 반복 또한 N번 실행된다. -> O(N)

따라서 각 사람에 대해 N번 비교를 하므로 전체 시간 복잡도는 O(N \* N) = O(N^2)이다.

## 알고리즘 선택

이중 for문을 사용한 브루트포스 방법(전수조사)

# 📌 코드 설계하기

1. 값 저장을 위해 다차원 배열을 사용해 데이터 변경 후 [몸무게, 키] 몸무게 순으로 정렬한다.
2. 반복문을 돌며 해당 인덱스 값이 이후의 인덱스 값보다 덩치가 큰 지 비교한다

- 이때 덩치가 크면 count 하여 최종 등수값을 위한 값을 저장한다.

3. 출력 조건에 맞게 출력한다.

# 📌 정답 코드

```
const path = require("path");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const list = input.slice(1, input.length).map((v) => {
  const [w, h] = v.split(" ");
  return { w: +w, h: +h, rank: 1 };
});

list.forEach((per) => {
  for (let i = 0; i < list.length; i++) {
    if (per.w < list[i].w && per.h < list[i].h) per.rank += 1;
  }
});

console.log(list.map((v) => v.rank).join(" "));
```
