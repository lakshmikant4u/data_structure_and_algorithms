/** https://leetcode.com/problems/subsets/

Subsets

Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Test Case 1
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

Test Case 2
Input: nums = [0]
Output: [[],[0]]

Constraints:

1 <= nums.length <= 10
-10 <= nums[i] <= 10
All the numbers of nums are unique.

*/

// Solution 1 : backtracking

const subsets = nums => {
    const output = [];
    const backtrack = (idx, subset) => {
        output.push([...subset]);
        for (let i = idx; i < nums.length; i++) {
            subset.push(nums[i]);
            backtrack(i + 1, subset);
            subset.pop();
        }
    };
    backtrack(0, []);
    return output;
};

console.log(subsets([1, 2, 3])); //
// [
//     [], [1],
//     [1, 2], [1, 2, 3],
//     [1, 3], [2],
//     [2, 3], [3]
// ]
