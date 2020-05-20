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
//  那我能去谷歌吗

// 初解
var invertTree = function (root) {
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

// 题解区看到的更秀一点的写法
var invertTree = function (root) {
    if (root) {
        [root.left, root.right] = [invertTree(root.right), invertTree(root.left)]
    }
    return root
};