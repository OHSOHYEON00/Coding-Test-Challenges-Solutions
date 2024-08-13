# 거스름돈

문제 링크: https://www.acmicpc.net/problem/5585

# 📌 문제 탐색하기

**거스름돈 개수가 가장 적게** 잔돈을 줄 수 있는 경우의 수를 구해야한다.

### 조건

- 1 <= 지불할 돈 <= 1,000
- 잔돈 동전의 종류는 500,100,50,10,5,1 가 있다.

- 입력값은 타로가 지불할 돈이다. -> 거스름돈이 아님
- 출력은 잔돈에 포함된 매수 (동전 개수)이다.

## 접근 방법

동전의 개수를 가장 적게 만들기 위해서는 동전의 값이 큰 것부터 포함될 수 있는지 검사해야한다.
ex. 500 > 100 > 50 > ...순으로 검사

1. 거스름돈을 계산한다. (1000 - 입력값)
2. 거스름돈이 [500, 100, 50, 10, 5, 1] 중에서 지불될 수 있는지 검사하기 위해 순서대로 루프를 돌며 계산한다.

- 거스름돈이 arr[i] 보다 크다면 몇 개의 동전을 지불할 수 있는지 계산 -> Math.floor(거스름돈/arr[i]). 이 때, 동전 개수는 자연수이므로 `Math.floor`를 써서 **반내림**을 한다.
- 지불가능한 동전 개수를 제외하여 남은 거스름돈으로 위 로직을 반복한다.

3.  동일한 로직이 반복될 것 같다. 이걸 어떻게 줄일 수 있을까? -> 지불 가능한 동전 개수 구하고 남은 거스름돈을 계산하는 함수를 별도로 생성하자.

## 가능한 시간복잡도, 알고리즘 선택

그리디 알고리즘. 여기서는 동전의 배열을 모두 순환하기 때문에 O(n)이다.

# 📌 코드 설계하기

1. 거스름돈을 계산한다.
2. `coins = [500, 100, 50, 10, 5, 1]` 배열이 `function calculate(coin)` 돌며 지불 가능한 동전 개수를 구한다.

- 배열을 개발자가 이미 **가장 큰 동전부터 정렬**한 상태이기 때문에 sort가 별도로 필요하진 않지만 그리디 알고리즘의 목적(최선의 선택 = 가장 큰 동전부터 계산)에 맞추기 위해 추가하였다.

3. `calculate()`의 역할

- changes >= coin 일 때만 아래 함수 로직을 실행한다. -> 남은 거스름돈이 동전보다 크지 않은 경우 계산을 수행할 필요가 없음
- 지불 가능한 동전 개수를 구한 후, 개수만큼 count에 더한다. -> Math.floor(changes / coin)

# 📌 정답 코드

```
const path = require("path");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const filePath = path.resolve(__dirname, "example.txt");
let change = 1000 - +require("fs").readFileSync(filePath).toString().trim();

let count = 0;

function calculate(coin) {
  if (change >= coin) {
    const cnt = Math.floor(change / coin);
    count += cnt;
    change -= coin * cnt;
  }
}

let coins = [500, 100, 50, 10, 5, 1];
coins.sort((a, b) => b - a);

coins.forEach((coin) => {
  calculate(coin);
});

console.log(count);
```
