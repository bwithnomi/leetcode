// Given an integer array nums, find the subarray with the largest sum, and return its sum.

function maxSubArray(nums: number[]): number {
  let [currentSum, largestSum] = [0, nums[0]]
  nums.forEach(n => {
      currentSum = Math.max(n, currentSum + n)
      largestSum = Math.max(currentSum, largestSum)
  })
  return largestSum
};

// test cases 
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5,4,-1,7,8]));
