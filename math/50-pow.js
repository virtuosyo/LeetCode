var myPow = function (x, n) {
    if (n < 0) {
        // 处理n为负数的情况
        return 1 / myPow(x, -n);
    }
    if (n === 0) {
        return 1;
    }
    // 分而治之
    if (n % 2 === 0) {
        // 如果是偶次幂
        return myPow(x * x, Math.floor(n / 2));
    }
    // 奇次幂则再乘一个x
    return myPow(x * x, Math.floor(n / 2)) * x;
};