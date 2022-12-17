
/* Class containing left and right child of current
    node and key value */

// class Node {
//     constructor(item) {
//         this.key = item;
//         this.left = this.right = null;
//     }
// }


// let root = null;

// /* create root */

// root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(3);
// root.left.left = new Node(4);

// javascript program for different tree traversals

/* Class containing left and right child of current
node and key value*/
class Node {
    constructor(val) {
        this.key = val;
        this.left = null;
        this.right = null;
    }
}

// Root of Binary Tree
var root = null;


/*
* Given a binary tree, print its nodes according to the "bottom-up" postorder
* traversal.
*/
function printPostorder(node, res) {
    if (node == null)
        return res;

    // first recur on left subtree
    res = printPostorder(node.left, res);

    // then recur on right subtree
    res = printPostorder(node.right, res);

    // now deal with the node
    // console.log(node.key + " ");
    res += ` ${node.key}`;
    return res;
}

/* Given a binary tree, print its nodes in inorder */
function printInorder(node, res) {
    if (node == null)
        return res;

    /* first recur on left child */
    res = printInorder(node.left, res);

    /* then print the data of node */
    // console.log(node.key + " ");
    res += ` ${node.key}`

    /* now recur on right child */
    res = printInorder(node.right, res);
    return res;
}

/* Given a binary tree, print its nodes in preorder */
function printPreorder(node, res) {
    if (node == null)
        return res;

    /* first print data of node */
    // console.log(node.key + " ");
    res += ` ${node.key}`

    /* then recur on left subtree */
    res = printPreorder(node.left, res);

    /* now recur on right subtree */
    res = printPreorder(node.right, res);
    return res;

}


root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("Preorder traversal of binary tree is ");
let preRes = printPreorder(root, "");
console.log(preRes);

console.log("Inorder traversal of binary tree is ");
let inRes = printInorder(root, "");
console.log(inRes);

console.log("Postorder traversal of binary tree is");
let postRes = printPostorder(root, "");
console.log(postRes);

