/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
    if (!root) return false
    let res = false
    const dfs = (node, val) => {
        if (!node.left && !node.right && val === sum) {
            res = true
        }
        if (node.left) dfs(node.left, val + node.left.val)
        if (node.right) dfs(node.right, val + node.right.val)
    }
    dfs(root, root.val)
    return res
};