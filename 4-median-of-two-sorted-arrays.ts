// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let mergedArray = [...nums1, ...nums2].sort((a, b) => a-b);
  
  return mergedArray.length % 2 ? mergedArray[Math.floor(mergedArray.length / 2)] : (mergedArray[mergedArray.length / 2] + mergedArray[(mergedArray.length / 2) - 1]) / 2;
};

// test cases
console.log(findMedianSortedArrays([1,3], [2]));
console.log(findMedianSortedArrays([1,2], [3,4]));


