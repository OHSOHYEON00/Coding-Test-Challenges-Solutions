# 사과 담기

문제 링크: https://www.acmicpc.net/problem/2828

# 📌 문제 탐색하기

해당 문제는 바구니를 이동하는 최소값을 찾아야 한다.
아래는 문제를 이해하며 들었던 고민들을 추리한 과정이다.

1. 모든 사과를 받아야 한다 -> 바구니는 사과가 떨어지는 스크린의 위치로 항상 이동해야한다. (선택적 이동은 고려하지 않아도 된다.)

2. 바구니 칸 수가 입력값에 따라 달라진다.
   -> 바구니가 포함하는 스크린을 알아야 한다. -> **시작점, 끝점 값을 사용**하여 바구니가 포함하는 스크린을 저장하자.

3. 스크린에 가장 가까이 위치한 바구니 위치에 따라 바구니를 이동시킨다. -> 가까이 위치함은 시작점, 끝점과 사과가 떨어진 스크린 위치 비교를 통해 정할 수 있다.

### 조건

1. 입력

- 첫째 줄에 N과 M이 주어진다. (1 ≤ M < N ≤ 10), N = 스크린, M = 바구니 칸 개수
- 둘째 줄에 떨어지는 사과의 개수 J가 주어진다. (1 ≤ J ≤ 20)
- J개 줄에는 사과가 떨어지는 위치가 순서대로 주어진다.

2. 출력

- 모든 사과를 담기 위해서 바구니가 이동해야 하는 **거리의 최솟값**을 출력한다.

## 접근 방법

1. 바구니의 현재 위치(start와 end)와 사과가 떨어지는 위치(apple)를 비교한다.
2. 바구니의 범위 밖에서 사과가 떨어지면, 바구니를 최소한으로 움직여 사과를 잡을 수 있는 위치로 이동한다.
3. 사과가 바구니 범위 내에 떨어진다면 바구니는 이동한다.
4. 이 과정을 모든 사과가 떨어지는 스크린에 대해 반복한다.

## 가능한 시간복잡도

사과가 떨어지는 스크린 배열을 모두 돌며 바구니 이동 여부를 검사하기 때문에 O(n)이다.

- `n`: 사과가 떨어지는 위치를 나타내는 배열 appleOnScreen의 길이

## 알고리즘 선택

그리디 알고리즘을 사용해 매 순간 가장 최선의 선택 (사과를 잡기 위해 바구니를 최소한으로 이동시키는 선택)을 사용했다.

# 📌 코드 설계하기

접근 방법을 기반으로 구체적인 코드 설계 방법이다.

1. 바구니의 시작점, 끝점을 각 1, M로 설정한다.
2. J개 줄 (사과가 떨어지는 위치)를 반복문을 돌며 바구니가 이동해야하는 거리를 계산한다.
3. J[i] 가 시작점보다 작은 값이면, count += 시작점 - J[i] 하여 이동한 거리를 더한다.
4. J[i]가 끝점보다 큰 값이면, count += J[i] - 끝점 하여 이동한 거리를 더한다.
5. J[i]가 시작점보다 크거나 같은 값이거나 끝점보다 작거나 같은 값인 경우, 바구니가 이동할 필요없이 사과를 받을 수 있기 때문에 count 값은 더해지지 않는다.

# 📌 시도 회차 수정 사항 (Optional)

### 1회차

실패

- 바구니가 이동했다는 것을 고려하지 않았다. start, end 값을 이동해줘야 했음.
- 사과가 떨어지는 스크린 배열 입력 처리 시, string을 number 타입으로 바꿔주지 않아 연산착오.

### 2회차

성공

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

const [, basketSize] = input[0].split(" ").map((v) => +v),
  appleOnScreen = input.slice(2, input.length).map((v) => +v);

let start = 1,
  end = basketSize,
  count = 0;

const minus = end - start;

appleOnScreen.forEach((apple) => {
  if (apple < start) {
    count += start - apple;
    start = apple;
    end = minus + start; // end 도 함께 이동
  } else if (apple > end) {
    count += apple - end;
    end = apple;
    start = end - minus; // start도 함께 이동
  }
});

console.log(count);
```
