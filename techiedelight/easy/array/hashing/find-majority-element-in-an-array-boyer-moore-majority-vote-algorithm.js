/** https://www.techiedelight.com/find-majority-element-in-an-array-boyer-moore-majority-vote-algorithm/

Find majority element (Boyer–Moore Majority Vote Algorithm)

Given an integer array containing duplicates, return the majority element if present. A majority element appears more than n/2 times, where n is the array size.

For example, the majority element is 2 in array {2, 8, 7, 2, 2, 5, 2, 3, 1, 2, 2}.

*/

// Solution 1 Brute Force 
// The time complexity of the solution is O(n2), where n is the size of the array.
let array = [2, 8, 7, 2, 2, 5, 2, 3, 1, 2, 2];
const findMajority = (arr, n = arr.length) => {
    // check whether `arr[i]` is a majority element or not
    for (let i = 0; n && i <= n / 2; i++) {
        let count = 1;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] == arr[i]) {
                count++;
            }
        }

        if (count > n / 2) {
            return arr[i];
        }
    }
    return -1;
}
console.log(findMajority(array)); // 2 


// Solution 2 Linear-time Solution

const findMajority2 = (arr, n = arr.length, map = new Map()) => {
    arr.forEach(element => map.set(element, map.get(element) + 1 || 1))
    for (let [key, value] of map) { if (value > n / 2) return key; }
    return -1;
}

console.log(findMajority2(array)); // 2 

// Solution 3 Boyer–Moore majority vote algorithm
const findMajorityBM = (arr, n = arr.length) => {
    let counter = 0;
    let majority = arr[0];
    for (let i = 1; n && i < n; i++) {
        if (counter == 0) {
            majority = arr[i];
            counter = 1;
        } else {
            counter--;
        }
    }
    return majority;
}
console.log(findMajorityBM(array)); // 2 