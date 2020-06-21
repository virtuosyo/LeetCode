/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    const q = [[root, 0]]
    const result = []
    while (q.length) {
        const [node, l] = q.shift()
        if (node) {
            if (!result[l]) {
                result.push([node.val])
            } else {
                result[l].push(node.val)
            }
            if (node.left) q.push([node.left, l + 1])
            if (node.right) q.push([node.right, l + 1])
        }
    }
    return result.reverse()
};