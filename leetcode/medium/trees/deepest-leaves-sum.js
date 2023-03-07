/** https://leetcode.com/problems/deepest-leaves-sum/

Deepest Leaves Sum

Given the root of a binary tree, return the sum of values of its deepest leaves.

Test Case 1
Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
Output: 15

Test Case 2
Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
Output: 19

 */

// Solution 1 DFS

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const deepestLeavesSum = (root, map = {}, max_height = 0) => {

    const helper = (node, h = 0) => {
        if (!node) return;
        max_height = Math.max(max_height, h);
        map[h] = map[h] ? map[h] + node.val : node.val;
        helper(node.left, h + 1);
        helper(node.right, h + 1);
    }

    helper(root);
    return map[max_height];
};
