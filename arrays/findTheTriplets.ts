// Given an integer array nums, return all the triplets
// the solution set must not contain duplicate triplets.
// The only possible triplet sums up to 0.

// steps:
// sort the array <> pick i and then use two pointers to find j and k such that i + j + k = 0
// i + j + k = 0 | i = -(j+k) | -1 = -(0 + 1) | -1 = -1 | 0

function threeSum(nums: number[]): number[][] {
  let triplets: number[][] = [];
  const sortedNums = nums.sort((a, b) => a - b);

  for (let i = 0; i < sortedNums.length - 2; i++) {
    let left = i + 1;
    let right = sortedNums.length - 1;

    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
      continue; // Skip duplicate values for i to avoid duplicate triplets
    }

    while (left < right) {
      const sum = sortedNums[i] + sortedNums[left] + sortedNums[right];
      if (sum === 0) {
        const newTriplet = [sortedNums[i], sortedNums[left], sortedNums[right]];
        triplets.push(newTriplet);

        left++;
        right--;

        // Skip ALL duplicate left values
        while (left < right && sortedNums[left] === sortedNums[left - 1]) {
          left++;
        }

        // Skip ALL duplicate right values
        while (left < right && sortedNums[right] === sortedNums[right + 1]) {
          right--;
        }
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  console.log(triplets);
  return triplets;
}

const numsList = [1, 2, 0, 1, 0, 0, 0, 0];
// sorted nums:  [0, 0, 0, 0, 0, 1, 1, 2]

// Test Cases
// [-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0];
// [2, -3, 0, -2, -5, -5, -4, 1, 2, -2, 2, 0, 2, -4, 5, 5, -10];
// [3, -2, 1, 0];
// [-1, 0, 1, 2, -1, -4];
// [0, 0, 0, 0];
threeSum(numsList);
