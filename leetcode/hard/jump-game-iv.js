/** https://leetcode.com/problems/jump-game-iv/

Jump Game IV

Given an array of integers arr, you are initially positioned at the first index of the array.

In one step you can jump from index i to index:

i + 1 where: i + 1 < arr.length.
i - 1 where: i - 1 >= 0.
j where: arr[i] == arr[j] and i != j.
Return the minimum number of steps to reach the last index of the array.

Notice that you can not jump outside of the array at any time.

Test Case 1
Input: arr = [100,-23,-23,404,100,23,23,23,3,404]
Output: 3
Explanation: You need three jumps from index 0 --> 4 --> 3 --> 9. 
Note that index 9 is the last index of the array.

Test Case 2
Input: arr = [7]
Output: 0
Explanation: Start index is the last index. You do not need to jump.

Test Case 3
Input: arr = [7,6,9,6,9,6,9,7]
Output: 1
Explanation: You can jump directly from index 0 to index 7 which is last index of the array.

Constraints:

1 <= arr.length <= 5 * 104
-108 <= arr[i] <= 108

 */

// Solution 1

/**
 * @param {number[]} arr
 * @return {number}
 */
const minJumps = (arr) => {
    let q = new Set([0]), level = 0, f = {}, n = arr.length, seen = new Set(), result = Infinity
    for (let i = 0; i < n; i++)
        if (!f[arr[i]])
            f[arr[i]] = [i]
        else
            f[arr[i]].push(i)
    while (result === Infinity) {
        let temp = new Set();
        q.forEach(idx => {
            if (idx == n - 1)
                return result = level

            for (let nei of [idx - 1, idx + 1, ...f[arr[idx]]])
                if (!seen.has(nei) && nei >= 0 && nei < n)
                    seen.add(nei), temp.add(nei),
                        f[arr[idx]] = [-1]
        })
        q = temp, level++
    }
    return result
};

console.log(minJumps([100, -23, -23, 404, 100, 23, 23, 23, 3, 404])); // 3