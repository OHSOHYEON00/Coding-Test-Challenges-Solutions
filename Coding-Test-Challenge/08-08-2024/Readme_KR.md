# 생일

문제 링크: https://www.acmicpc.net/problem/5635

# 📌 문제 탐색하기

찾아야하는 건, 가장 나이 많은 사람/ 가장 나이가 적은 사람의 정보이다. -> 전체 리스트를 정렬할 필요는 없다.

### 조건

1. 인풋
   학생 수 n (1 ≤ n ≤ 100), n개의 줄에 'dd mm yyyy 이름' 리스트 출력

- 생일: (1990 ≤ yyyy ≤ 2010, 1 ≤ mm ≤ 12, 1 ≤ dd ≤ 31), 항상 올바른 날짜, 연,월,일은 0으로 시작하지 않음
- 이름: 최대 15글자
- **이름 또는 생일이 같은 사람은 없다.**

2. 출력
   가장 나이 적은 사람, 나이 많은 사람의 이름을 순서대로 출력

## 접근 방법

- 인풋으로 들어온 생일값을 비교할 수 있는 데이터 형태로 변환해야겠다 -> Date형으로 변환 후 비교하자
- 필요한 두 명의 정보를 찾는 방법? -> 학생 수는 100명으로 많지 않다. min, max 설정 후 전체 탐색한다.

- JS의 sort를 사용해 O(nlogn)의 방식으로 사용해도 된다.

## 가능한 시간복잡도

- min, max 찾기 위한 전채 탐색: O(n)
- .sort() 사용 : O(nlogn)

## 알고리즘 선택

조금이라도 적은 min, max 찾기 위한 전채 탐색 방식을 선택한다.

# 📌 코드 설계하기

1. min = 0, max = 0 변수 설정
2. 학생 리스트를 반복문으로 돌며

- 학생 나이 Date 형으로 변경
- min보다 작으면 min 값 변경
- max보다 크면 max값 변경

# 📌 시도 회차 수정 사항 (Optional)

### 1회차

- birth 배열값을 Date형으로 바꾸는 과정에서 new Date 사용법 오류. month 는 0-11까지 존재함.

### 2회차

성공

# 📌 정답 코드

```
const path = require("path");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const filePath = path.resolve(__dirname, "example.txt");
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const count = +input[0],
  list = input.slice(1, input.length);

const getNameBirth = (str) => {
  const [name, day, month, year] = str.split(" ");

  return {
    name,
    birth: new Date(Date.UTC(year, month - 1, day)),
  };
};

const first = getNameBirth(list[0]);

if (count === 1) {
  console.log(first.name);
  console.log(first.name);
} else {
  let min = first;
  let max = first;

  list.forEach((val, index) => {
    if (index > 0) {
      const { birth } = getNameBirth(val);

      if (birth > min.birth) min = getNameBirth(val);
      if (birth < max.birth) max = getNameBirth(val);
    }
  });

  console.log(min.name, max.name);
}
```
