// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

function maxProfit(prices: number[]): number {
  let min = prices[0]
  let max = 0
  
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i])
    max = Math.max(max, prices[i] - min)
  }
  
  return max
}

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));
