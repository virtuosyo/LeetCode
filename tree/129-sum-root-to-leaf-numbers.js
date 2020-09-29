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
var sumNumbers = function (root) {
    if (!root) {
        return 0
    }
    let res = 0
    const result = []
    const dfs = (node, val) => {
        if (!node.left && !node.right) {
            result.push(`${val}`)
        }
        if (node.left) dfs(node.left, `${val}${node.left.val}`)
        if (node.right) dfs(node.right, `${val}${node.right.val}`)
    }
    dfs(root, root.val)
    result.reduce((prev, cur) => {
        res += parseInt(cur)
        return res
    }, 0)
    return res
};