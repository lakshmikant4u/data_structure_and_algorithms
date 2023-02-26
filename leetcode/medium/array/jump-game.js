/** https://leetcode.com/problems/jump-game/

Jump Game

You are given an integer array nums. You are initially positioned at the array's first index,
 and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

Test Case 1
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

Test Case 2
Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0,
 which makes it impossible to reach the last index.


Constraints:

1 <= nums.length <= 104
0 <= nums[i] <= 105

*/

// Solution 1

const canJump = (nums) => {

    let lastGoodIndex = nums.length - 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] + i >= lastGoodIndex) {
            lastGoodIndex = i;
        }
    }
    return lastGoodIndex === 0;
};

console.log(canJump([2, 3, 1, 1, 4])); // true