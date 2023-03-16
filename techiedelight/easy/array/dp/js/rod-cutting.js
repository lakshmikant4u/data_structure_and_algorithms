/** https://www.techiedelight.com/rod-cutting/

Rod Cutting Problem

Given a rod of length n and a list of rod prices of length i, where 1 <= i <= n, 
find the optimal way to cut the rod into smaller rods to maximize profit.

Test Case 1
length[] = [1, 2, 3, 4, 5, 6, 7, 8]
price[] = [1, 5, 8, 9, 10, 17, 17, 20]
 
Rod length: 4
Best: Cut the rod into two pieces of length 2 each to gain revenue of 5 + 5 = 10

Result : 10
 */

// Solution 1 : DP

const rodCuttingMaxRevenue = (price, rod_length) => {
    let profit = Array(rod_length + 1).fill(0);
    for (let i = 1; i <= rod_length; i++) {
        for (let j = 1; j <= i; j++) {
            profit[i] = Math.max(profit[i], price[j - 1] + profit[i - j]);
        }
    }
    return profit[rod_length];
}


console.log(rodCuttingMaxRevenue([1, 5, 8, 9, 10, 17, 18, 20], 4)); // 10