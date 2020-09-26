/**
 * Definition for a binary tree root.
 * function Treeroot(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {Treeroot} root
 * @return {boolean}
 */

// 法一 初解 递归 没跑过
var isValidBST = function (root) {
    if (root == null) return true
    if (root.left == null && root.right == null) return true
    if (root.left !== null) {
        if (root.left.val >= root.val) {
            return false
        }
    }
    if (root.right !== null) {
        if (root.right.val <= root.val) {
            return false
        }
    }
    return isValidBST(root.left) && isValidBST(root.right)
};

// 法二 中序遍历 得到一个数组 如果是BST则这个数组必定是有序的
var isValidBST = function (root) {
    let arr = []
    const inOrderTraverseNode = (node) => {
        if (node) {
            inOrderTraverseNode(node.left)
            arr.push(node.val)
            inOrderTraverseNode(node.right)
        }
    }
    inOrderTraverseNode(root)
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] >= arr[i + 1]) return false
    }
    return true
};

var isValidBST = function (root) {
    const res = []
    const stack = []
    let p = root
    while (stack.length || p) {
        while (p) {
            stack.push(p)
            p = p.left
        }
        const node = stack.pop()
        if (res.length) {
            if (node.val <= res[res.length - 1]) {
                return false
            }
            res.push(node.val)
        } else {
            res.push(node.val)
        }
        p = node.right
    }
    return true
}