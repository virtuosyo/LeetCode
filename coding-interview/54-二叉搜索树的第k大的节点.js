/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
    const inOrder = (node) => {
        const res = []
        const stack = []
        let p = node
        while (stack.length || p) {
            while (p) {
                stack.push(p)
                p = p.left
            }
            const n = stack.pop()
            res.push(n.val)
            p = n.right
        }
        return res
    }
    let result = inOrder(root)
    return result.reverse()[k - 1]
};