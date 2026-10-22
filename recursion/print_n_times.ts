// print a message n times using recursion

function printNTimes(n: number): void {
  if (n <= 0) return;

  printNTimes(n - 1);
  console.log("Ravina:: ", n);
}

printNTimes(5);
