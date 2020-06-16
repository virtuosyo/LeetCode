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

var postorderTraversal = function (root) {
    let res = []
    let stack = [root]
    let outputStack = []
    let p = root
    while (stack.length) {
        const n = stack.pop()
        if (n) {
            outputStack.push(n)
            if (n.left) stack.push(n.left)
            if (n.right) stack.push(n.right)
        }
    }
    while (outputStack.length) {
        const n = outputStack.pop()
        res.push(n.val)
    }
    return res
};