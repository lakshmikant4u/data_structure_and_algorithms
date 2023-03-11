/** https://leetcode.com/problems/new-21-game/

New 21 Game

Alice plays the following game, loosely based on the card game "21".

Alice starts with 0 points and draws numbers while she has less than k points. During each draw, she gains an integer number of points randomly from the range [1, maxPts], where maxPts is an integer. Each draw is independent and the outcomes have equal probabilities.

Alice stops drawing numbers when she gets k or more points.

Return the probability that Alice has n or fewer points.

Answers within 10-5 of the actual answer are considered accepted.

Test Case 1
Input: n = 10, k = 1, maxPts = 10
Output: 1.00000
Explanation: Alice gets a single card, then stops.

Test Case 2
Input: n = 6, k = 1, maxPts = 10
Output: 0.60000
Explanation: Alice gets a single card, then stops.
In 6 out of 10 possibilities, she is at or below 6 points.

Test Case 3
Input: n = 21, k = 17, maxPts = 10
Output: 0.73278

 */

// Solution 1

const new21Game = (n, k, maxPts) => {
    if (k + maxPts <= n || k === 0) return 1;

    let dp = [];
    dp[0] = 1;
    dp[1] = 1 / maxPts;

    for (let i = 2; i <= n; i++) {
        dp[i] = 0;

        if (i <= k) {
            dp[i] = (1 + 1 / maxPts) * dp[i - 1];
        } else {
            dp[i] = dp[i - 1];
        }
        if (i > maxPts) {
            dp[i] -= dp[i - maxPts - 1] / maxPts;
        }
    }

    return dp.reduce((acc, cur, idx) => {
        if (idx >= k) {
            acc += cur;
        }
        return acc;
    }, 0)
};

console.log(new21Game(6, 1, 10)); // 0.6