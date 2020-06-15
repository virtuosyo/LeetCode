/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    let arr = []
    const preOrderTraverseNode = (node) => {
        if (node) {
            arr.push(node.val)
            preOrderTraverseNode(node.left)
            preOrderTraverseNode(node.right)
        }
    }
    preOrderTraverseNode(root)
    return arr
};