/** https://www.geeksforgeeks.org/graph-coloring-set-2-greedy-algorithm/


 */


// Javascript program to implement greedy
// algorithm for graph coloring

// This class represents a directed graph
// using adjacency list representation
class Graph {

    // Constructor
    constructor(v) {
        this.V = v;
        this.adj = new Array(v);

        for (let i = 0; i < v; ++i)
            this.adj[i] = [];

        this.Time = 0;
    }

    // Function to add an edge into the graph
    addEdge(v, w) {
        this.adj[v].push(w);

        // Graph is undirected
        this.adj[w].push(v);
    }

    // Assigns colors (starting from 0) to all
    // vertices and prints the assignment of colors
    greedyColoring() {
        let result = new Array(this.V);

        // Initialize all vertices as unassigned
        for (let i = 0; i < this.V; i++)
            result[i] = -1;

        // Assign the first color to first vertex
        result[0] = 0;

        // A temporary array to store the available
        // colors. False value of available[cr] would
        // mean that the color cr is assigned to one
        // of its adjacent vertices
        let available = new Array(this.V);

        // Initially, all colors are available
        for (let i = 0; i < this.V; i++)
            available[i] = true;

        // Assign colors to remaining V-1 vertices
        for (let u = 1; u < this.V; u++) {

            // Process all adjacent vertices and
            // flag their colors as unavailable
            for (let it of this.adj[u]) {
                let i = it;
                if (result[i] != -1)
                    available[result[i]] = false;
            }

            // Find the first available color
            let cr;
            for (cr = 0; cr < this.V; cr++) {
                if (available[cr])
                    break;
            }

            // Assign the found color
            result[u] = cr;

            // Reset the values back to true
            // for the next iteration
            for (let i = 0; i < this.V; i++)
                available[i] = true;
        }

        // print the result
        for (let u = 0; u < this.V; u++)
            console.log("Vertex " + u + " ---> Color " +
                result[u]);
    }
}

// Driver code
let g1 = new Graph(5);
g1.addEdge(0, 1);
g1.addEdge(0, 2);
g1.addEdge(1, 2);
g1.addEdge(1, 3);
g1.addEdge(2, 3);
g1.addEdge(3, 4);
console.log("Coloring of graph 1");
g1.greedyColoring();

console.log("-");
let g2 = new Graph(5);
g2.addEdge(0, 1);
g2.addEdge(0, 2);
g2.addEdge(1, 2);
g2.addEdge(1, 4);
g2.addEdge(2, 4);
g2.addEdge(4, 3);
console.log("Coloring of graph 2 ");
g2.greedyColoring();

