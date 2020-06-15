var isSymmetric = function (root) {
    if (root == null) return true;
    function iS(left, right) {
        if (left == null && right == null) return true;
        if (left == null || right == null) return false;
        if (left.val !== right.val) return false;
        return iS(left.right, right.left) && iS(left.left, right.right)
    }
    return iS(root.left, root.right)
};