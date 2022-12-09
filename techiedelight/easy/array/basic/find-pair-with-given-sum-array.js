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

