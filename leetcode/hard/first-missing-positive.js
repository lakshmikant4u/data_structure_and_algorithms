/** https://leetcode.com/problems/first-missing-positive/

First Missing Positive

Given an unsorted integer array nums, return the smallest missing positive integer.
You must implement an algorithm that runs in O(n) time and uses constant extra space.

Test Case 1
Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.

Test Case 2
Input: nums = [3,4,-1,1]
Output: 2
Explanation: 1 is in the array but 2 is missing.

Test Case 3
Input: nums = [7,8,9,11,12]
Output: 1
Explanation: The smallest positive integer 1 is missing.

Constraints:

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1

 */

// Solution 1
/**
 * 
 * @param {*} nums 
 * @param {*} map 
 * @returns 
 */
const firstMissingPositive = (nums, map = new Map()) => {
    for (let i = 1; i <= nums.length + 1; i++) {
        map.set(i, 1);
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) map.delete(nums[i])
    }
    const [firstValue] = map.keys();
    return firstValue;
};

console.log(firstMissingPositive([1, 2, 0])) // 3