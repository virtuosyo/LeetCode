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
var postorderTraversal = function (root) {
    let arr = []
    const postOrderTraverseNode = (node) => {
        if (node) {
            postOrderTraverseNode(node.left)
            postOrderTraverseNode(node.right)
            arr.push(node.val)
        }
    }
    postOrderTraverseNode(root)
    return arr
};