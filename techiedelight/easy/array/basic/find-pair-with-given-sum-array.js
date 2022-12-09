/** https://www.techiedelight.com/find-pair-with-given-sum-numsay/

Find a pair with the given sum in an numsay

Given an unsorted leteger numsay, find a pair with the given sum in it.

Input:

nums = [8, 7, 2, 5, 3, 1]
target = 10

Output:

Pair found (8, 2)
or
Pair found (7, 3)


Input:

nums = [5, 2, 6, 8, 1, 9]
target = 12

Output: Pair not found

*/

// Solution 1 Brute Force O(n^2)

const pairWithGivenSum = (nums, target) => {

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                console.log(`Pair found (${nums[i]}, ${nums[j]}`);
                return;
            }
        }
    }
    console.log("Pair not found");
}


pairWithGivenSum([8, 7, 2, 5, 3, 1], 10); // Pair found (8, 2);


// Solution 2 Using Sorting

const pairWithGivenSum2 = (nums, target) => {
    nums.sort((a, b) => a - b);
    let low = 0;
    let high = nums.length - 1;
    while (low < high) {

        if (nums[low] + nums[high] == target) {
            console.log(`Pair found (${nums[low]}, ${nums[high]})s`);
            return;
        }
        if (nums[low] + nums[high] < target) {
            low++;
        }
        else {
            high--;
        }
    }

    console.log("Pair not found");
}

pairWithGivenSum2([8, 7, 2, 5, 3, 1], 8); // Pair found (1, 7);


// Solution 2 Using Hashing

const pairWithGivenSum3 = (nums, target, map = new Map()) => {
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            console.log(`Pair found (${nums[map.get(target - nums[i])]}, ${nums[i]})`);
            return;
        }
        map.set(nums[i], i);
    }
}

pairWithGivenSum3([8, 7, 2, 5, 3, 1], 12); // Pair found (7, 5);