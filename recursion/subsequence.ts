// write a recursion function which pins down all the subsequences
// arr [3, 1, 2] = [3], [3,1], [3,1,2], [1,2], [1], [2], [3,2], [] = 8

function findSubsequences(
  arr: number[],
  index: number,
  current: number[],
): void {
  if (index === arr.length) {
    console.log({ current, index });
    return;
  }

  current.push(arr[index]);
  console.log(current);
  findSubsequences(arr, index + 1, current);

  current.pop();
  console.log(current);
  findSubsequences(arr, index + 1, current);
}

findSubsequences([3, 1, 2], 0, []);
