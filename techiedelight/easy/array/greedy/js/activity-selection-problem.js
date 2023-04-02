/** https://www.techiedelight.com/activity-selection-problem/

Activity Selection Problem

Given a set of activities, along with the starting and finishing time of each activity, 
find the maximum number of activities performed by a single person 
assuming that a person can only work on a single activity at a time.

For example,

Input: Following set of activities
 
(1, 4), (3, 5), (0, 6), (5, 7), (3, 8), (5, 9), (6, 10), (8, 11), (8, 12), (2, 13), (12, 14)
 
Output:
 
(1, 4), (5, 7), (8, 11), (12, 14)

 */

const activitySelectionProgram = (input) => {
    let output = [];
    let k = 0;
    input.sort((a, b) => a[1] - b[1]);
    if (input.length > 0) {
        output.push(input[0]);
    }
    for (let i = 1; i < input.length; i++) {
        console.log(input[i + 1], input[i])
        if (input[i][0] >= input[k][1]) {
            output.push(input[i]);
            k = i;
        }
    }
    return output;
}


let input = [[1, 4], [3, 5], [0, 6], [5, 7], [3, 8], [5, 9], [6, 10], [8, 11], [8, 12], [2, 13], [12, 14]];

console.log(JSON.stringify(activitySelectionProgram(input))); // [[1,4],[5,7],[8,11],[12,14]]
