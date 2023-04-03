/** https://leetcode.com/problems/boats-to-save-people/

Boats to Save People

You are given an array people where people[i] is the weight of the ith person,
and an infinite number of boats where each boat can carry a maximum weight of limit.
Each boat carries at most two people at the same time,
provided the sum of the weight of those people is at most limit.

Return the minimum number of boats to carry every given person.

Test Case 1
Input: people = [1,2], limit = 3
Output: 1
Explanation: 1 boat (1, 2)

Test Case 2
Input: people = [3,2,2,1], limit = 3
Output: 3
Explanation: 3 boats (1, 2), (2) and (3)

Test Case 3
Input: people = [3,5,3,4], limit = 5
Output: 4
Explanation: 4 boats (3), (3), (4), (5)

Constraints:

1 <= people.length <= 5 * 104
1 <= people[i] <= limit <= 3 * 104

*/

// Solution 1 : Two pointers

const numRescueBoats = (people, limit) => {
    people.sort((a, b) => a - b);
    let begin = 0; end = people.length - 1, res = 0;

    while (begin <= end) {
        res++;
        if (people[begin] + people[end] <= limit) {
            begin++;
        }
        end--;
    }
    return res;
};

console.log(numRescueBoats([3, 2, 2, 1], 3)); // 3