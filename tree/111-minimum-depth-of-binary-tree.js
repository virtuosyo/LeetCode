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
var minDepth = function (root) {
    if (root) {
        const q = [
            [root, 1]
        ]
        while (q.length) {
            const [n, l] = q.shift()
            if (!n.left && !n.right) return l
            if (n.left) q.push([n.left, l + 1])
            if (n.right) q.push([n.right, l + 1])
        }
    } else {
        return 0
    }
};