// Given an array of binary digits, 0 and 1, sort the array
// so that all zeros are at one end and all ones are at the other,
// Which end does not matter. To sort the array, swap any two
// adjacent elements. Determine the minimum number of swaps
// to sort the array.

// arr = [0, 1, 0, 1, 1, 0];
// Output: 4

function minMoves(arr: number[]): number {
  let zeros = 0;
  let ones = 0;

  let zeroOneMoves = 0; // 000....111
  let oneZeroMoves = 0; // 111....000

  for (let x of arr) {
    if (x === 0) {
      zeros++;
      zeroOneMoves += ones;
    } else {
      ones++;
      oneZeroMoves += zeros;
    }
  }

  return Math.min(zeroOneMoves, oneZeroMoves);
}

const arr = [0, 1, 0, 1];
const minMovesRequired = minMoves(arr);
console.log("Minimum moves required:: ", minMovesRequired);

// If two elements must cross to reach the correct order, count the crossing instead of performing the swap.
