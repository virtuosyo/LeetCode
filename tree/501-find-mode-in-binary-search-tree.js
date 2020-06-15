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
var findMode = function (root) {
    let result = []
    let res = []
    const inOrder = node => {
        if (node) {
            inOrder(node.left)
            result.push(node.val)
            inOrder(node.right)
        }
    }
    inOrder(root)
    let obj = {}
    result.forEach(item => {
        if (!obj[item]) {
            obj[item] = 1
        }
        obj[item]++
    })
    let max = 0
    for (let k in obj) {
        if (obj[k] > max) {
            max = obj[k]
        }
    }
    for (let k in obj) {
        if (obj[k] === max) {
             res.push(k)
        }
    }
    return res
};