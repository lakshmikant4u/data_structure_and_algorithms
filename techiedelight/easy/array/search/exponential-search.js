// https://www.techiedelight.com/exponential-search/

/**
 * Exponential search
Given a sorted array of n integers and a target value, determine if the target exists in the array or not in logarithmic 
time. If the target exists in the array, return the index of it.


Test Case 1
Input: A[] = [2, 3, 5, 7, 9]
target = 7
 
Output: Element found at index 3
 
Test Case 2
Input: A[] = [1, 4, 5, 8, 9]
target = 2
 
Output: Element not found


 */
let A = [2, 3, 5, 7, 9]
const exponentialSearch = (arr, key) => {

    if (arr == null || arr.length == 0) {
        return -1;
    }

    let bound = 1;
    while (bound < arr.length && arr[bound] < key) {
        bound *= 2;
    }
    return binarySearch(arr, bound / 2, Math.min(bound, arr.length - 1), key);
}
const binarySearch = (arr, left, right, x) => {
    if (left > right) {
        return -1;
    }

    let mid = (left + right) / 2;
    if (x == arr[mid]) {
        return mid;
    }
    else if (x < arr[mid]) {
        return binarySearch(arr, left, mid - 1, x);
    }
    else {
        return binarySearch(arr, mid + 1, right, x);
    }
}

let index = exponentialSearch(A, 9);
if (index != -1) {
    console.log(`Element found at index ${index}`);
}
else {
    console.log(`Element not found in the array`);
}