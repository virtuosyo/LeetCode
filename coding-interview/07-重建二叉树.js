/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

var buildTree = function (preorder, inorder) {
    if (!preorder.length || !inorder.length) {
        return null
    }

    const rootVal = preorder.shift()
    const node = new TreeNode(rootVal)

    let i = 0
    for (; i < inorder.length; i++) {
        if (inorder[i] === rootVal) {
            break
        }
    }

    node.left = buildTree(preorder.slice(0, i), inorder.slice(0, i))
    node.right = buildTree(preorder.slice(i), inorder.slice(i + 1))
    return node
}