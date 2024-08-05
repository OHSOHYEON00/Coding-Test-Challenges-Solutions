# 일곱난쟁이

문제 링크: https://www.acmicpc.net/problem/2309

# 📌 문제 탐색하기

### 조건

- 인풋: 100을 넘지 않는 자연수, 모두 다름
- 결과: length 7인 배열 엘리먼트 출력, total 100, 오름치순 정렬

시간 제한: 2초
메모리 제한: 128MB

## 접근 방법

- 일곱 난쟁이를 어떻게 고를 수 있을까? -> 2명의 난쟁이만 제외하면 된다.
  **Note**: 처음엔 7명을 "골라야"한다고 생각했는데, 인풋 개수가 정해져있기 때문에 "제외"할 2명의 난쟁이에 집중하는 것이 간단해질 것 같다.
- 키의 합이 100이 되어야한다는 조건은 어떻게 만족시킬까? -> 2명의 난쟁이 키의 합이 (9 난쟁이의 키의 합) - 100 을 만족하면 된다.

## 가능한 시간복잡도

- 정렬: O(n log n)
- 투 포인터 탐색: O(n)

## 알고리즘 선택

- 정렬: O(n log n)
- 투 포인터 탐색: O(n)

# 📌 코드 설계하기

1. 준비 
- 인풋을 오름차순으로 정렬한다.
- (인풋 엘리먼트의 모든 합) - 100 값(*targetSum*) 구한다.

2. 제외할 2개의 엘리먼트 선택 로직
투 포인터를 사용하여 각 포인터가 가리키는 엘리먼트의 합이 1-2의 값과 같을 때까지 반복한다.

- 각 포인터는 0, length-1에서 시작한다. 두 포인터가 가리키는 엘리먼트의 합이 *targetSum* 값과 같을 때까지 반복한다.
**Note** 문제 상으로 답이 존재하지 않는 경우는 없기 때문에 위와 같이 반복문 종료 조건을 설정한다.

**포인터 이동 로직**
- (*targetSum*) > 합 -> right Pointer 이동
- (*targetSum*) < 합 -> left Pointer 이동

3. return용 배열 생성

# 📌 시도 회차 수정 사항 (Optional)

### 1회차

- 시간 초과, while 안 조건문에 break 문을 넣어주지 않아 발생

### 2회차

- 틀림, 마지막에 2포인터 값 제외할 때 filtering 시 배열 값과 인덱스 (left, right)값을 비교함

### 3회차

- 틀림, 아무리 검토해도 로직은 문제없었으나 답 제출 시, 배열 형태가 아닌 각 배열 엘리먼트 값을 로그 찍어야 했음

# 📌 정답 코드

```
const path = require("path");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
 .map(v => +v);

let sortedInput = input.sort((a, b) => a - b);

const targetSum = sortedInput.reduce((a, b) => a + b) - 100;

let left = 0,
  right = sortedInput.length - 1;

while (left < right) {
  const currentSum = sortedInput[left] + sortedInput[right];

  if (currentSum === targetSum) {
    break;
  } else if (currentSum < targetSum) {
    left++;
  } else {
    right--;
  }
}

sortedInput
  .filter((_, index) => index !== left && index !== right)
  .sort((a, b) => a - b).map(v => console.log(v));
```
