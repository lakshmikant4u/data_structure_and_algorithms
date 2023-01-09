/** https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

Find First and Last Position of Element in Sorted Array

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity.

Test Case 1
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Test Case 2
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Test Case 3
Input: nums = [], target = 0
Output: [-1,-1]

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109

 */

// Solution 1 Brute Force

var searchRange = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            let high = i;

            while (high < nums.length && nums[high] == target)
                high++;

            return [i, high - 1];
        }
    }

    return [-1, -1];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8)) // [3, 4]

// Solution 2 

const searchRange2 = function (nums, target) {
    return [
        nums.findIndex(ele => ele === target),
        nums.lastIndexOf(target)
    ]
};

console.log(searchRange2([5, 7, 7, 8, 8, 10], 6)) // [-1, -1]