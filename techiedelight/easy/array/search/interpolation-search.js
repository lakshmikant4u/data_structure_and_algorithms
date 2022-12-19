// https://www.techiedelight.com/interpolation-search/

/**
By comparison, at each search step, Interpolation search calculates wherein the remaining search space 
the target might be present, based on the low and high values of the search space and the target’s value.
The value found at this estimated position is then compared to the target value.If it’s not equal, 
then the remaining search space is reduced to the part before or after the estimated position depending on the comparison.
This method will only work if calculations on the size of differences between target values are sensible.

Interpolation search uses the following formula to calculate the mid - position where A[low…high] is our search space, 
and target is the given target:

mid = low + ((target – A[low]) * (high – low) / (A[high] – A[low]));
 */

let arr = [2, 3, 5, 7, 9]
const interpolationSearch = (arr, target, left = 0, right = arr.length - 1) => {
    if (arr == null || arr.length == 0) {
        return -1;
    }

    while (arr[right] != arr[left] && target >= arr[left] && target <= arr[right]) {

        mid = left + ((target - arr[left]) * (right - left) / (arr[right] - arr[left]));

        if (target == arr[mid]) {
            return mid;
        }
        else if (target < arr[mid]) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }

    if (target == arr[left]) {
        return left;
    }
    return -1;
}


let index = interpolationSearch(arr, 9);
if (index != -1) {
    console.log(`Element found at index ${index}`);
}
else {
    console.log(`Element not found in the array`);
}