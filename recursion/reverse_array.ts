// reverse an array using recursion
// arr = [2, 3, 4, 5, 6], // output: [6, 5, 4, 3, 2]

function reverseArray(arr: number[], left: number, right: number): number[] {
  if (left >= right) {
    return arr;
  }

  [arr[left], arr[right]] = [arr[right], arr[left]];
  reverseArray(arr, left + 1, right - 1);

  return arr;
}

const arr = [2, 3, 4, 5, 6];
console.log("arr: ", arr);

const reversedArr = reverseArray(arr, 0, arr.length - 1);
console.log("reversedArr: ", reversedArr);
