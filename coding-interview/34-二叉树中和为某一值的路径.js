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
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
    if (!root) return []
    const result = []
    const dfs = (node, val, arr) => {
        let tArr = [...arr]
        if (!node.left && !node.right && val === sum) {
            result.push([...arr, node.val])
        }
        if (node.left) dfs(node.left, node.left.val + val, [...tArr, node.val])
        if (node.right) dfs(node.right, node.right.val + val, [...tArr, node.val])
    }
    dfs(root, root.val, [])
    return result
};