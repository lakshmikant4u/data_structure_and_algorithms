/** https://leetcode.com/problems/number-of-provinces/

Number of Provinces

There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, 
and city b is connected directly with city c, then city a is connected indirectly with city c.

A province is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected,
 and isConnected[i][j] = 0 otherwise.

Return the total number of provinces.

Test Case 1
Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
Output: 2

Test Case 2
Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
Output: 3

 */


// Solution 1

const findCircleNum = (isConnected) => {
    let c = 0;
    let visited = {};
    for (let i = 0; i < isConnected.length; i++) {
        if (!visited[i]) {
            dfs(isConnected, i);
            c++;
        }
    }
    function dfs(isConnected, i) {
        for (let j = 0; j < isConnected[i].length; j++) {
            if (isConnected[i][j] == 1 && !visited[j]) {
                visited[j] = true;
                dfs(isConnected, j);
            }
        }
    }
    return c;
};

console.log(findCircleNum([[1, 1, 0], [1, 1, 0], [0, 0, 1]])) // 2