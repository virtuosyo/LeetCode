/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
    const invert = node => {
        if (node) {
            [node.left, node.right] = [node.right, node.left]
            invert(node.left)
            invert(node.right)
        }
    }
    invert(root)
    return root
};