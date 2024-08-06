const path = require("path");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const filePath = path.resolve(__dirname, "example.txt");
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

if (count === 1) result(list);
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

  const result = (arr) => {
    arr.forEach((v) => console.log(`${v.age} ${v.name}`));
  };

  result(list);
}
