function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const mergedArray = [...nums1, ...nums2];
  const sortedArray = mergedArray.sort((a, b) => a - b);
  let medianInx = (sortedArray.length - 1) / 2;

  console.log("medianInx:: ", medianInx);
  if (sortedArray.length % 2 === 0) {
    medianInx = medianInx - 0.5;
    console.log("medianInx even:: ", medianInx);
    const medianNum = (sortedArray[medianInx] + sortedArray[medianInx + 1]) / 2;
    console.log("median number ", medianNum);
    return medianNum;
  }

  const medianNum = sortedArray[medianInx];
  console.log("median number ", medianNum);
  return medianNum;
}

const numbs1 = [1, 2];
const numbs2 = [3, 4]; // [1, 2, 3, 4]

findMedianSortedArrays(numbs1, numbs2);
