// sum of first n number using recursion

function sumOfNNums(n: number): number {
  if (n === 0) return 0;

  return n + sumOfNNums(n - 1);
}

console.log(sumOfNNums(5));
