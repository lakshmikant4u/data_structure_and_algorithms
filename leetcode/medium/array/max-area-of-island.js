/** https://leetcode.com/problems/max-area-of-island/solution/

Max Area of Island

You are given an m x n binary matrix grid. An island is a group of 1's (representing land) 
connected 4-directionally (horizontal or vertical.) 
You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.
Return the maximum area of an island in grid. If there is no island, return 0.

Test Case 1
Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
Output: 6
Explanation: The answer is not 11, because the island must be connected 4-directionally.

Test Case 2
Input: grid = [[0,0,0,0,0,0,0,0]]
Output: 0

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 50
grid[i][j] is either 0 or 1.

 */

// Solution 1 : 

var maxAreaOfIsland = function (grid) {
    let max = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                let area = dfs(grid, i, j);
                max = Math.max(max, area)
            }
        }
    }
    return max;
};

const dfs = (grid, r, c) => {
    let area = 0;
    if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] === 0) return 0;
    grid[r][c] = 0;
    area = 1 + dfs(grid, r - 1, c) + dfs(grid, r + 1, c) + dfs(grid, r, c - 1) + dfs(grid, r, c + 1);
    return area
}

// Solution 2

const maxAreaOfIsland = (grid) => {
    const rows = grid.length
    const cols = grid[0].length

    const isValid = (i, j) => 0 <= i && i < rows && 0 <= j && j < cols && grid[i][j] === 1

    const calcIslandSize = (i, j) => {
        let cur = 0

        const dfs = (i, j) => {
            cur++
            grid[i][j] = 2 // mark as seen
            const moves = [[-1, 0], [1, 0], [0, 1], [0, -1]]

            moves.forEach(m => { //O(4)
                const x = i + m[0]
                const y = j + m[1]

                if (isValid(x, y)) dfs(x, y)
            })
        }

        dfs(i, j)

        return cur
    }

    let size = 0
    for (let i = 0; i < rows; i++) { //O(n)
        for (let j = 0; j < cols; j++) { //O(m)
            if (grid[i][j] === 1) { //not visited island
                size = Math.max(calcIslandSize(i, j), size)
            }
        }
    }

    return size
};

