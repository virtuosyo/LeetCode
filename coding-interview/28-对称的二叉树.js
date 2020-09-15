/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (!root) {
        return true
    }
    const is = (left, right) => {
        if (!left && !right) {
            return true
        } else if (!left || !right) {
            return false
        } else if (left.val !== right.val) {
            return false
        }
        return is(left.left, right.right) && is(left.right, right.left)
    }
    return is(root.left, root.right)
};