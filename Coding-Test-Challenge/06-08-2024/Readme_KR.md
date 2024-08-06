# 나이순 정렬

문제 링크: https://www.acmicpc.net/problem/10814

# 📌 문제 탐색하기

### 조건

1. 인풋

- 첫째 줄: 회원 수 (1 ≤ N ≤ 100,000)
- 둘째 줄~: 회원 정보 ('나이 이름'), 순서는 가입 순서, (1<= 나이 <= 200) (이름은 알파벳 대소문자, 길이 <= 100)

2. 아웃풋

- N개의 줄로, '나이 이름'순

3.

- 시간: 3초
- 메모리: 256 MB

## 접근 방법

- 가입순서를 어딘가에 저장해야겠다 -> list를 {order, age, name} 형태의 객체 배열 형태로 변환하자
- 입력받은 배열 자체를 정렬하고 나이가 같은 애들만 다시 정렬할 순 없을까? -> 나이가 같은 회원이 많은 경우 무의미, 고유한 나이를 가지는 회원이 없을 경우에도 무의미하다.
- 정렬 알고리즘을 사용해 퀵정렬하자. -> 퀵정렬 사용

## 가능한 시간복잡도

- 퀵정렬: O(nlogN), 피봇을 계속해서 잘못 설정한 경우 최악 O(n^2)

## 알고리즘 선택

- 퀵정렬: O(nlogN), 피봇을 계속해서 잘못 설정한 경우 최악 O(n^2)

# 📌 코드 설계하기

계속해서 재귀를 돌아야한다. 재귀함수 종료 조건과 시작,끝 조건을 잘 설정하자.

1. 세팅

- 인풋받은 배열은 {order, age, name} 형태의 객체 배열 형태로 변환
- 배열 length === 1인 경우, 바로 종료

2. 재귀 함수 (arr, start, end)

- pivot 설정
- pivot 기준으로 start ~ pivot-1, pivot+1 ~ end 까지의 각 배열을 다시 재귀
- 종료 조건: start >= end 일 경우

3. 퀵정렬(arr, start, end)
   해당 함수의 목적은 인자로 받은 arr내에서 low > high가 될 때(pivot이 이동한 경우)까지 정렬한다. pivot이 이동한 경우, pivot값을 리턴하여 정렬할 리스트 범위를 줄이도록 한다.

- 변수 설정 pivot = start, low = start+1, high = end
- low < high 일 동안, low의 조건 (피봇보다 나이가 적거나, 나이가 같을 경우 순서가 낮을 경우)을 만족하지 않을 때까지 low++;
- low < high 일 동안, high의 조건 (피봇보다 나이가 많거나, 나이가 같을 경우 순서가 높을 경우)을 만족하지 않을 때까지 high--;

- low, high가 더이상 이동하지 않을 때,
- low < high 이면 low 엘리먼트 <-> high 엘리먼트 교환
- low >= high 이면 pivot 엘리먼트 <-> high 엘리먼트 교환

# 📌 시도 회차 수정 사항 (Optional)

**Note**: 전반적으로 퀵정렬하는 부분이랑 재귀함수(정렬해야하는 리스트를 분리하는 부분)을 제대로 구분하지 못하여 같은 함수 내에서 작성하는 바람에 초기에 헤맸다. 각 함수의 역할을 제대로 분리하는 것에 초점을 맞출 필요가 있음.

### 1회차

- 코드 제출 시, return이 아니라 console.log로 제출하기 때문에 가장 윗 부분 (list.length===1인 경우) 조건문 else를 달아주지 않아 컴파일 에러 발생

# 📌 정답 코드

```
const path = require("path");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const count = +input[0],
  list = input.slice(1, input.length).map((v, i) => {
    const [age, name] = v.split(" ");
    return { order: i, age: +age, name };
  });

if (count === 1) list.forEach((v) => console.log(`${v.age} ${v.name}`));
else {
  const quickSort = (arr, start, end) => {
    let pivot = start;
    let low = start + 1,
      high = end;

    while (true) {
      while (
        low <= high &&
        (arr[low].age < arr[pivot].age ||
          (arr[low].order < arr[pivot].order && arr[low].age == arr[pivot].age))
      )
        low++;
      while (
        low <= high &&
        (arr[high].age > arr[pivot].age ||
          (arr[high].order > arr[pivot].order &&
            arr[high].age == arr[pivot].age))
      )
        high--;

      if (low > high) break;
      [arr[low], arr[high]] = [arr[high], arr[low]];
    }

    [arr[pivot], arr[high]] = [arr[high], arr[pivot]];
    return high;
  };

  const sorting = (arr, start, end) => {
    if (start >= end) return;

    const pivot = quickSort(arr, start, end);
    sorting(arr, start, pivot - 1);
    sorting(arr, pivot + 1, end);
  };

  sorting(list, 0, list.length - 1);

  list.forEach((v) => console.log(`${v.age} ${v.name}`));
}
```
