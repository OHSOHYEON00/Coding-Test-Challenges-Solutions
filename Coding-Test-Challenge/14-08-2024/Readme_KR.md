# 컵홀더

문제 링크: https://www.acmicpc.net/problem/2810

# 📌 문제 탐색하기

### 조건

- 입력: 첫째 줄에 좌석의 수 N. (1 ≤ N ≤ 50) 둘째 줄에는 좌석의 정보
- 출력: 컵을 컵홀더에 놓을 수 있는 최대 좌석의 수

## 접근 방법 & 코드 설계

해당 문제 접근 시 우선 두 단계로 나눌 필요가 있다고 생각했다.

1. 컵홀더가 위치할 수 있는 곳은 어디인지
2. 컵홀더와 좌석을 어떻게 매치할 것인지 (=컵홀더 사용할 수 있는 좌석 수는 어떻게 구할 것인지)

💡 만약 문자열이 모두 싱글석이라면 좌석 수 값 그대로 출력한다. 아래 계산을 진행할 필요가 없다.

### 컵홀더가 위치할 수 있는 곳은 어디인지

주어진 좌석 정보를 바탕으로 컵홀더가 위치할 수 있는 곳을 구하는 것이 목적이다.

```
ex. SLLLLSSLL -> *S*LL*LL*S*S*LL*
```

💡 좌석 정보 문자열 반복문을 돌면서 좌석 종류에 따라 \*를 추가하자.

💡 양 끝 좌석에는 항상 컵홀더가 하나씩 더 있으므로 문자열 앞뒤에 \*를 추가해주자.

❓ LL이 붙어있는 경우를 어떻게 판단할 것인가? ex. LLLL를 반복문 돌 때, 어떤 L이 짝이 되었고, 아직 짝이 되지 않았는지를 판별할 것인가?

### 컵홀더와 좌석을 어떻게 매치할 것인지

반복문을 돌며 해당 인덱스 문자열이 \*인지 좌석인지 판단하여 매치한다.
이 때, 그리디 알고리즘을 사용해 최대한 매치를 시키도록 한다. (현재 값이 매치된다면 우선 매치시키는 것으로 진행한다.)

이미 확인한 문자열을 재확인하지 않도록 주의하며 코드짠다.

## 가능한 시간복잡도

문자열 반복문을 돌기 때문에 O(n)이다. for문이 2개 있어 O(2n)이 되나, 빅오 계산법을 따라 O(n)이다.

## 알고리즘 선택

컵홀더 위치를 생성, 매치하는 과정에서 탐색을 사용했다.
컵홀더와 좌석을 매치하는 과정에서 그리디 알고리즘을 사용했다.

# 📌 코드 설계하기

## 컵홀더가 위치할 수 있는 곳은 어디인지

처음 시작 시, 'SLLLLSSLL' 인 문자열이 있다.

1. 문자열 돌면서 S를 만나면 다음 인덱스에 \*추가

2. 문자열 돌면서 L을 만나면 짝여부를 판단하기 위한 카운트 (0부터 시작)

count = 0이면 1로 바꾸고 *추가하지 않음
count = 1이면 0으로 바꾸고 *추가함

3. 문자열 맨 앞에 \*추가

## 컵홀더와 좌석을 어떻게 매치할 것인지

1. 문자열 처음부터 돌면서 \*이면 다음 좌석과 매치 성공
   -> i++; (매치된 좌석 이후의 인덱스로 이동), cnt++

2. 좌석이면, 다음 인덱스에 *가 있는지 확인 후
   -> *가 있다면, 매치 성공 i ++, cnt++ \*가 아니라 좌석이면 매치 실패, i++

- i++ 하는 이유는 다음 \* 또는 좌석과 매치가 되거나 되지 않았음을 이미 판별했기 때문에 for문 안에서 중복된 확인을 피하기 위함이다.

# 📌 시도 회차 수정 사항 (Optional)

### 1회차

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

let total = +input[0],
  seats = input[1];

if (!seats.includes("L")) {
  console.log(total);
} else {
  let newSeats = "*";
  let isCouple = 0;

  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === "S") {
      newSeats += `${seats[i]}*`;
    } else if (seats[i] === "L") {
      if (isCouple === 0) {
        isCouple = 1;
        newSeats += `${seats[i]}`;
      } else {
        isCouple = 0;
        newSeats += `${seats[i]}*`;
      }
    }
  }

  let result = 0;

  for (let i = 0; i < newSeats.length; i++) {
    if (newSeats[i] === "*") {
      i++;
      result++;
    } else {
      if (newSeats[i + 1] === "*") {
        result++;
      }
      i++;
    }
  }

  console.log(result);
}
```
