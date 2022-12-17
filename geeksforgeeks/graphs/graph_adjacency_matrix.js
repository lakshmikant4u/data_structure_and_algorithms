/**
 * Adjacency Matrix: 
 * Adjacency Matrix is a 2D array of size V x V where V is the number of vertices in a graph. 
 * Let the 2D array be adj[][], a slot adj[i][j] = 1 indicates that there is an edge from vertex i to vertex j. 
 * Adjacency matrix for undirected graph is always symmetric. Adjacency Matrix is also used to represent weighted graphs. 
 * If adj[i][j] = w, then there is an edge from vertex i to vertex j with weight w. 
 */

let n = 4;

const adjMat = new Array(n);
for (let i = 0; i < adjMat.length; i++) {
    adjMat[i] = new Array(n);
}
// Every node is conneccted here
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        adjMat[i][j] = 1;
        adjMat[j][j] = 1;
    }
}

console.table(adjMat);