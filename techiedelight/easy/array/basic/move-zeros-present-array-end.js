/** https://www.techiedelight.com/move-zeros-present-array-end/

Move all zeros present in an array to the end
Given an integer array, move all zeros present in it to the end. The solution should maintain the relative order of items
 in the array and should not use constant space.

Test Case 1
Input:  { 6, 0, 8, 2, 3, 0, 4, 0, 1 }
 
Output: { 6, 8, 2, 3, 4, 1, 0, 0, 0 }
 */

// Solution

const moveZerosToEnd = (arr) => {
    let k = 0;
    for (let item of arr) {
        if (item != 0) {
            arr[k++] = item;
        }
    }
    // move all 0's to the end of the array (remaining indices)
    for (let i = k; i < arr.length; i++) {
        arr[i] = 0;
    }
    return arr;
}

console.log(moveZerosToEnd([6, 0, 8, 2, 3, 0, 4, 0, 1]));