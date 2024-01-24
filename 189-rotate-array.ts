// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  for (let i = 0; i < k; i++) {
    let a = nums.pop();
    nums.unshift(a!)
  }
  console.log(nums);
  
};

rotate([1,2,3,4,5,6,7], 3)
rotate([-1,-100,3,99], 2)

