// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let left = nums.length - 1;
  let right = nums.length - 1;
  let indexes: number[] = [];
  while (left >= 0) {
    if (nums[left] == 0 && left == right) {
      left--
      right--
    } else if (nums[left] == 0) {
      let a = nums[left + 1];
      nums[left + 1] = nums[left]
      nums[left] = a;
      left++;
    } else {
      left--;
    }

  }

  console.log(nums)
};

// test cases 
moveZeroes([0, 1, 0, 3, 12])
moveZeroes([0]);