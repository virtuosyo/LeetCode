/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) {
        return 0
    }
    let res = 0
    const dfs = (node, l) => {
        if (!node.left && !node.right) {
            res = Math.max(res, l)
        }
        if (node.left) dfs(node.left, l + 1)
        if (node.right) dfs(node.right, l + 1)
    }
    dfs(root, 1)
    return res
};