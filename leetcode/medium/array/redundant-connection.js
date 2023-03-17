/** https://leetcode.com/problems/redundant-connection/

Redundant Connection

In this problem, a tree is an undirected graph that is connected and has no cycles.

You are given a graph that started as a tree with n nodes labeled from 1 to n, 
with one additional edge added. The added edge has two different vertices chosen from 1 to n, 
and was not an edge that already existed. The graph is represented as an array edges of length n 
where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the graph.

Return an edge that can be removed so that the resulting graph is a tree of n nodes. 
If there are multiple answers, return the answer that occurs last in the input.

Test Case 1
Input: edges = [[1,2],[1,3],[2,3]]
Output: [2,3]

Test Case 2
Input: edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]
Output: [1,4]

*/

// Solution 1
const findRedundantConnection = (edges) => {
    const tree = new Array(edges.length + 1).fill(0).map((item, i) => i);
    const rank = new Array(edges.length + 1).fill(0);

    function root(a) {
        while (tree[a] !== a) {
            tree[a] = tree[tree[a]];
            a = tree[a];
        }
        return a;
    }
    function union(a, b) {
        const rootA = root(a);
        const rootB = root(b);
        if (rank[rootA] >= rank[rootB]) {
            tree[rootB] = rootA;
            rank[rootA] += rank[rootB];
        } else {
            tree[rootA] = rootB;
            rank[rootB] += rank[rootA];
        }
    }
    function find(a, b) {
        return root(a) === root(b);
    }
    for (let [a, b] of edges) {
        if (find(a, b)) return [a, b];
        union(a, b);
    }
};

console.log(findRedundantConnection([[1, 2], [1, 3], [2, 3]])); // [ 2, 3 ]