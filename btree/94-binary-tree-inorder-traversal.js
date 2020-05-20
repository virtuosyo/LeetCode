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
var inorderTraversal = function (root) {
    let arr = []
    const inOrderTraverseNode = (node) => {
        if (node) {
            inOrderTraverseNode(node.left)
            arr.push(node.val)
            inOrderTraverseNode(node.right)
        }
    }
    inOrderTraverseNode(root)
    return arr
};