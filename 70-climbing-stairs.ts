// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

function climbStairs(n: number): number {
  // create array filled with zeros
  let dpMemory: number[] = Array(n + 1).fill(0)

  dpMemory[0] = 1 // takes 1 step to come from floor
  dpMemory[1] = dpMemory[0] // takes 1 step to come to 1st Step
  for (let currentStep = 2; currentStep <= n; currentStep++) {
      const oneStepBack = dpMemory[currentStep - 1]
      const twoStepBack = dpMemory[currentStep - 2]
      dpMemory[currentStep] = oneStepBack + twoStepBack
  }
  return dpMemory.pop() || 0 // last item will have sum of all combinations
};

console.log(climbStairs(2));
console.log(climbStairs(3));


