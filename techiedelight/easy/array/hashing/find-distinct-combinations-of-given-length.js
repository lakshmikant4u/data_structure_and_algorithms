/** https://www.techiedelight.com/find-distinct-combinations-of-given-length/

Find all distinct combinations of a given length – I

Given an integer array, find all distinct combinations of a given length k.

Test Case 1
Input:  [2, 3, 4], k = 2
Output: [{2, 3}, {2, 4}, {3, 4}]

Test Case 2
Input:  [1, 2, 1], k = 2
Output: [{1, 2}, {1, 1}, {2, 1}]
 */

// Solution 1

const findCombinations = (arr, i, k, subarrays, part_res) => {

    if (arr.length == 0 || k > arr.length) {
        return;
    }

    // base case: combination size is `k`
    if (k == 0) {
        subarrays.push([...part_res]);
        return;
    }
    // start from the next index till the last index
    for (let j = i; j < arr.length; j++) {
        part_res.push(arr[j]);
        findCombinations(arr, j + 1, k - 1, subarrays, part_res);
        part_res.pop(part_res.length - 1);        // backtrack
    }
    return subarrays;
}

console.log(findCombinations([2, 3, 4], 0, 2, [], [])); // [[2, 3], [2, 4], [3, 4]]

console.log(findCombinations([1, 2, 1], 0, 2, [], [])); // [[1, 2], [1, 1], [2, 1]]

