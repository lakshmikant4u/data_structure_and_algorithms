/** https://leetcode.com/problems/top-k-frequent-elements/

Top K Frequent Elements

Given an integer array nums and an integer k, return the k most frequent elements.
You may return the answer in any order.

Test Case 1
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Test Case 2
Input: nums = [1], k = 1
Output: [1]


Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.

*/

// Solution 1
const topKFrequent = (nums, k, counts = {}) => {

    for (let i = 0; i < nums.length; i++) {
        counts[nums[i]] = counts[nums[i]] + 1 || 1;
    }
    return Object.keys(
        Object.fromEntries(
            Object.entries(counts)
                .sort((a, b) => b[1] - a[1])
                .slice(0, k)
        )
    )
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [ '1', '2' ]

