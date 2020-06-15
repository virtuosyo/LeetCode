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
    let res = 0
    const dfs = (node, l) => {
        if (node) {
            if (!node.left && !node.right) {
                res = Math.max(res, l)
            }
            dfs(node.left, l + 1)
            dfs(node.right, l + 1)
        }
    }
    dfs(root, 1)
    return res
};