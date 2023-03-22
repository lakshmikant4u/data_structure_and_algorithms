/** https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/

Minimum Score of a Path Between Two Cities

You are given a positive integer n representing n cities numbered from 1 to n.
You are also given a 2D array roads where roads[i] = [ai, bi, distancei]
indicates that there is a bidirectional road between cities ai and bi with a distance
equal to distancei. The cities graph is not necessarily connected.

The score of a path between two cities is defined as the minimum distance of a road in this path.

Return the minimum possible score of a path between cities 1 and n.

Note:

A path is a sequence of roads between two cities.
It is allowed for a path to contain the same road multiple times,
and you can visit cities 1 and n multiple times along the path.
The test cases are generated such that there is at least one path between 1 and n.


Test Case 1
Input: n = 4, roads = [[1,2,9],[2,3,6],[2,4,5],[1,4,7]]
Output: 5
Explanation: The path from city 1 to 4 with the minimum score is: 1 -> 2 -> 4.
The score of this path is min(9,5) = 5.
It can be shown that no other path has less score.

Test Case 2
Input: n = 4, roads = [[1,2,2],[1,3,4],[3,4,7]]
Output: 2
Explanation: The path from city 1 to 4 with the minimum score is: 1 -> 2 -> 1 -> 3 -> 4.
The score of this path is min(2,2,4,7) = 2.

Constraints:

2 <= n <= 105
1 <= roads.length <= 105
roads[i].length == 3
1 <= ai, bi <= n
ai != bi
1 <= distancei <= 104
There are no repeated edges.
There is at least one path between 1 and n.

*/

// Solution 1

class DisjointSetUnion {
    constructor(n) {
        this.parent = new Array(n + 1).fill().map((_, index) => index);
        this.rank = new Array(n + 1).fill(0);
    }

    find(num) {
        if (this.parent[num] === num) return num;

        return this.parent[num] = this.find(this.parent[num]);
    }

    union(source, target) {
        source = this.find(source);
        target = this.find(target);

        if (this.rank[source] < this.rank[target]) {
            [source, target] = [target, source];
        }

        this.parent[target] = source;
        this.rank[source] += 1;
    }
}

const minScore = (n, roads) => {
    const dsu = new DisjointSetUnion(n);
    for (const [source, target] of roads) {
        dsu.union(source, target);
    }

    let minDistance = Infinity;
    const root = dsu.find(1);
    for (const [source, target, distance] of roads) {
        if (dsu.find(source) === root || dsu.find(target) === root) {
            minDistance = Math.min(minDistance, distance);
        }
    }

    return minDistance;
};

console.log(minScore(4, [[1, 2, 9], [2, 3, 6], [2, 4, 5], [1, 4, 7]])); // 5