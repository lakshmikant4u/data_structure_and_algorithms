/** https://www.geeksforgeeks.org/count-possible-paths-source-destination-exactly-k-edges/

Given a directed graph and two vertices ‘u’ and ‘v’ in it, count all possible walks from ‘u’ to ‘v’ with exactly k edges on the walk. 

The graph is given adjacency matrix representation where the value of graph[i][j] 
as 1 indicates that there is an edge from vertex i to vertex j and a value 0 indicates no edge from i to j.

For example, consider the following graph. Let source ‘u’ be vertex 0, destination ‘v’ be 3 and k be 2. 
The output should be 2 as there are two walks from 0 to 3 with exactly 2 edges. The walks are {0, 2, 3} and {0, 1, 3}

 */

// Number of vertices in the graph
var V = 4

// A naive recursive function to count
// walks from u to v with k edges
function countwalks1(graph, u, v, k) {
    // Base cases
    if (k == 0 && u == v)
        return 1;
    if (k == 1 && graph[u][v])
        return 1;
    if (k <= 0)
        return 0;

    // Initialize result
    var count = 0;

    // Go to all adjacents of u and recur
    for (var i = 0; i < V; i++)
        if (graph[u][i] == 1) // Check if is adjacent of u
            count += countwalks1(graph, i, v, k - 1);

    return count;
}

// driver program to test above function
/* Let us create the graph shown in above diagram*/
var graph = [[0, 1, 1, 1,],
[0, 0, 0, 1,],
[0, 0, 0, 1,],
[0, 0, 0, 0]];
var u = 0, v = 3, k = 2;
console.log(countwalks1(graph, u, v, k));



// Number of vertices in the graph
var V = 4

// A Dynamic programming based function to count walks from u
// to v with k edges
function countwalks2(graph, u, v, k) {
    // Table to be filled up using DP.
    // The value count[i][j][e] will
    // store count of possible walks from
    // i to j with exactly k edges
    var count = new Array(V);
    for (var i = 0; i < V; i++) {
        count[i] = new Array(V);
        for (var j = 0; j < V; j++) {
            count[i][j] = new Array(V);
            for (var e = 0; e <= k; e++) {
                count[i][j][e] = 0;
            }
        }
    }

    // Loop for number of edges from 0 to k
    for (var e = 0; e <= k; e++) {
        for (var i = 0; i < V; i++) // for source
        {
            for (var j = 0; j < V; j++) // for destination
            {
                // initialize value
                count[i][j][e] = 0;

                // from base cases
                if (e == 0 && i == j)
                    count[i][j][e] = 1;
                if (e == 1 && graph[i][j])
                    count[i][j][e] = 1;

                // go to adjacent only when the
                // number of edges is more than 1
                if (e > 1) {
                    for (var a = 0; a < V; a++) // adjacent of source i
                        if (graph[i][a])
                            count[i][j][e] += count[a][j][e - 1];
                }
            }
        }
    }
    return count[u][v][k];
}

// driver program to test above function
/* Let us create the graph shown in above diagram*/
var graph = [[0, 1, 1, 1],
[0, 0, 0, 1],
[0, 0, 0, 1],
[0, 0, 0, 0]];
var u = 0, v = 3, k = 2;
console.log(countwalks2(graph, u, v, k));

