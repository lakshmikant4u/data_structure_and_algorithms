class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let root = new TreeNode(1);
let n1 = new TreeNode(7);
let n2 = new TreeNode(9);
let n3 = new TreeNode(2);
let n4 = new TreeNode(6);
let n5 = new TreeNode(9);
let n6 = new TreeNode(5);
let n7 = new TreeNode(11);
let n8 = new TreeNode(5);

root.left = n1;
root.right = n2;
n1.left = n3;
n1.right = n4;
n2.right = n5;
n4.left = n6;
n4.right = n7;
n5.right = n8;
console.log(JSON.stringify(root));

//{"val":1,"left":{"val":7,"left":{"val":2,"left":null,"right":null},"right":{"val":5,"left":null,"right":null}},
//"right":{"val":9,"left":null,"right":{"val":9,"left":null,"right":{"val":5,"left":null,"right":null}}}}
const print = (node) => {
  if (node != null) {
    console.log(node.val);
    print(node.left);
    print(node.right);
  }
};

print(root);


