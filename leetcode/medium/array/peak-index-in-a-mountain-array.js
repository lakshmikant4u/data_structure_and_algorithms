/** https://leetcode.com/problems/peak-index-in-a-mountain-array/

Peak Index in a Mountain Array

An array arr a mountain if the following properties hold:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
Given a mountain array arr, return the index i such that arr[0] < arr[1] < ... < arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

You must solve it in O(log(arr.length)) time complexity.

Test Case 1
Input: arr = [0,1,0]
Output: 1

Test Case 2
Input: arr = [0, 2, 3, 4, 1, 0]
Output: 1

Test Case 3
Input: arr = [0,10,15,5,2]
Output: 1

Constraints:

3 <= arr.length <= 105
0 <= arr[i] <= 106
arr is guaranteed to be a mountain array.

*/

// Solution 1 : Binary Search
const peakIndexInMountainArray1 = (arr, low = 0, high = arr.length - 1) => {
    while (low < high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (arr[mid] < arr[mid + 1])
            low = mid + 1
        else
            high = mid
    }
    return low;
};
console.log(peakIndexInMountainArray1([0, 1, 0])); // 1

// Solution 2 : Linear Scan
const peakIndexInMountainArray2 = (arr, pos = 0) => {
    while (arr[pos] < arr[pos + 1]) {
        pos++;
    }
    return pos;
};
console.log(peakIndexInMountainArray2([0, 2, 3, 4, 1, 0])); // 3

// Solution 3 : Recursive Binary Search
const peakIndexInMountainArray3 = (arr, low = 0, high = arr.length - 1) => {
    if (!arr.length)
        return -1

    const mid = ((low + high) / 2) | 0

    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1])
        return mid

    if (arr[mid] < arr[mid - 1])
        return peakIndexInMountainArray(arr, low, mid)

    if (arr[mid] < arr[mid + 1])
        return peakIndexInMountainArray(arr, mid, high)
}
console.log(peakIndexInMountainArray3([0, 10, 15, 5, 2])); // 2

// Solution 4
const peakIndexInMountainArray4 = (arr) => arr.indexOf(Math.max(...arr));
console.log(peakIndexInMountainArray4([0, 10, 15, 5, 2])); // 2