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
var sumOfLeftLeaves = function (root) {
    const dfs = (root, isLeft) => {
        if (root == null) return 0;
        if (root.left == null && root.right == null) {
            if (isLeft) return root.val;
            return 0;
        }
        return dfs(root.left, true) + dfs(root.right, false);
    };

    return dfs(root, false);
};