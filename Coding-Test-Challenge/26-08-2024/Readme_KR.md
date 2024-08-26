# 바이러스

문제 링크: https://www.acmicpc.net/problem/2606

# 📌 문제 탐색하기

해당 문제는 입력에 따라 연결된 노드끼리 잘 연결지어주고,
만들어진 그래프를 기반으로 최종 `연결된 노드 개수가 몇 개`인지 판단하는 문제이다.

### 조건

1. 입력

- 첫째 줄에는 컴퓨터의 수가 주어진다.

  - 컴퓨터의 수는 100 이하인 양의 정수
  - 각 컴퓨터에는 1번 부터 차례대로 번호가 매겨진다.

- 둘째 줄에는 네트워크 상에서 직접 연결되어 있는 컴퓨터 쌍의 수가 주어진다.

- 이어서 그 수만큼 한 줄에 한 쌍씩 네트워크 상에서 직접 연결되어 있는 컴퓨터의 번호 쌍이 주어진다.

2. 출력

- 1번 컴퓨터가 웜 바이러스에 걸렸을 때, 1번 컴퓨터를 통해 웜 바이러스에 걸리게 되는 `컴퓨터의 수`를 첫째 줄에 출력한다.

## 접근 방법

- 주어진 조건에 따라 연결된 컴퓨터들의 그래프를 생성한다.

  - 그래프 생성 시, 입력 조건 자체에서 `한 컴퓨터에 연결된 컴퓨터는 최대 2개이다`라는 식의 Binary tree를 만들 수 있는 조건이 있지 않았다. 따라서 Binary Tree 형식의 데이터 저장보다는 그래프 생성 후 그래프 검사 형식으로 접근하였다.

- 바이러스에 걸린 1번 컴퓨터와 연결된 컴퓨터들을 차례로 검사해나간다.

- 바이러스에 걸린 컴퓨터들을 발견할 때마다 Set 형식에 계속 추가한다.

- 추가하는 시간복잡도는 들지만, Set 타입 특성상 중복된 요소를 받지 않기 때문에 중복제거된 상태를 유지할 수 있다.

1. 저장 형식

- (N번 컴퓨터):[2,5] (연결된 컴퓨터 번호)

2. 검색 형식

- 바이러스에 걸린 1번 컴퓨터와 연결된 컴퓨터부터 차례로 돌며 바이러스에 걸린 컴퓨터를 Set에 추가한다.

3. Set 요소 개수를 리턴한다.

## 가능한 시간복잡도

- 그래프 생성: inputs.forEach 문에서 각 간선에 대해 두 번의 해시 테이블 접근 및 배열 추가 작업이 발생하므로 시간 복잡도는 `O(E)`이다. 여기서 E는 간선의 개수입니다.

- DFS 탐색: check 함수는 그래프의 모든 노드를 방문하게 되므로 시간 복잡도는 `O(V + E)`입니다. 여기서 V는 노드의 개수입니다.

- 전체 시간 복잡도: `O(V + E)`입니다

## 알고리즘 선택

그래프 탐색, DFS 방식을 사용하여 검사 진행

# 📌 코드 설계하기

### 입력 처리

1. 연결된 컴퓨터는 Object { [key]: [연결된 컴퓨터] } 형식으로 저장한다.

2. 바이러스 걸린 컴퓨터를 저장하는 Set 변수를 선언한다.

### 검사 방식

아래 바이러스 컴퓨터를 추가하는 function check함수에 연결된 컴퓨터 하나씩 추가한다.

### 바이러스 컴퓨터 추가 function check(com: number)

1. Set에 com을 추가한다.

2. Object[com]이 있는 경우에만 아래 검사 진행한다. 없는 경우 return;

3. 재귀를 사용하여 연결된 컴퓨터들을 검사한다.

# 📌 시도 회차 수정 사항 (Optional)

### 1회차

- 틀림, 런타임 에러
- 문제는 이미 검사한 컴퓨터를 또 검사해서 발생한 문제라고 생각함.
- 이에 다시 검사하기 전에 이미 검사한 항목 중에 컴퓨텉가 있는지 확인 후 검사하기로 함.

### 2회차

- 틀림,
- 문제는 입력에서 **연결된 쌍**이 주어진다는 것을 간과함. 즉, 1 2가 들어온다는 건, 1과 2가 연결되었기 때문에 2도 1과 연결되었다는 값을 가지고 있어야 함을 간과했음.

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

// 입력 처리
const inputs = input.splice(2, input.length);

const connection = {};
const set = new Set();

inputs.forEach((con) => {
  const [key, connected] = con.split(" ");
  connection[key] = connection[key]
    ? [...connection[key], +connected]
    : [+connected];

  connection[connected] = connection[connected]
    ? [...connection[connected], +key]
    : [+key];
});

// 검사
function check(com) {
  set.add(com);

  if (!connection[com]) return;

  connection[com].forEach((c) => {
    if (![...set.keys()].includes(c)) {
      check(c);
    } else return;
  });
}

if (connection[1]) {
  connection[1].forEach((c) => {
    if (![...set.keys()].includes(c)) {
      check(c);
    } else return;
  });
}

console.log([...set.keys()].filter((v) => v !== 1).length);
```
