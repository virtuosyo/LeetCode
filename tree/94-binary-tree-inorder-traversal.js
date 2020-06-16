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

var inorderTraversal = function (root) {
    const res = []
    const stack = []
    let p = root
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
};