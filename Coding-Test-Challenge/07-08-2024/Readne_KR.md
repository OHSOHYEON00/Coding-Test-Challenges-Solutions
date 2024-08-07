# 단어 정렬

문제 링크: https://www.acmicpc.net/problem/1181

# 📌 문제 탐색하기

### 조건

1. 인풋

- 첫번째 인풋: 개수
- 두번째부터~: 단어 리스트 (1<= N <= 20,000), 각 단어의 최대 길이는 50

2. 아웃풋 정렬 조건

- 길이가 짧은 순
- 길이가 같다면 사전순으로 정렬
- 중복 제거

2. 아웃풋

- 정렬한 단어를 하나씩 출력

3. 조건

- 시간 제한: 2초
- 메모리 제한: 256MB

## 접근 방법

입력받는 단어 개수가 그리 많지 않고, 단어 최대 길이도 50으로 그리 길지 않음.

- 길이별 정렬: Javascript에 내장된 `.sort()` 사용
- 사전순 정렬: Javascript `String.localeCompare()` 사용

- 중복 제거 방법: `Set`의 특성을 사용해 중복을 제거한다.

## 가능한 시간복잡도

정렬의 시간 복잡도 O(nlogN)

# 📌 코드 설계하기

1. Sorting 하지 않아도 되는 조건

- 첫 인풋 count가 1일 때
- set으로 중복 제거 후에 list 길이가 1일 때

2. Sorting

- 길이가 같지 않을 경우, 길이순 오름차순 정렬
- 길이가 같을 경우, localeCompare를 사용해 사전순 정렬

# 📌 시도 회차 수정 사항 (Optional)

### 1회차

- 컴파일 에러, 클릭해도 에러 정보를 알 수 없었음.

### 2회차

- 항상 Typescript로 제출했는데 Node.js로 제출하니 성공함

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

const count = +input[0];
let list = input.slice(1, input.length);

if (count === 1) {
  list.forEach((v) => console.log(v));
} else {
  const set = new Set(list);
  let setList = Array.from(set);

  if (set.length === 1) {
    setList.forEach((v) => console.log(v));
  } else {
    setList.sort((a, b) => {
      if (a.length !== b.length) {
        return a.length - b.length;
      } else {
        if (a.localeCompare(b) === 1) {
          // a is higher
          return 1;
        } else if (a.localeCompare(b) === -1) {
          // a is lower
          return -1;
        } else return 1;
      }
    });

    setList.forEach((v) => console.log(v));
  }
}
```
