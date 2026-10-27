// 0 1 1 2 3 5 8 13 21....

function nthFibonacciNum(n: number): number {
  if (n <= 1) return n;

  const last = nthFibonacciNum(n - 1);
  const slast = nthFibonacciNum(n - 2);
  return last + slast;
}

console.log(nthFibonacciNum(8));

// function fibonacciSeries(n: number, first: number, second: number): void {
//   if (second >= n) return;

//   console.log(first + second);
//   fibonacciSeries(n, second, first + second);
// }

// fibonacciSeries(100, 0, 1);
