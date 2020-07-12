/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n < 2) {
        return 1
    }
    const dp = [1, 1]
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
};

// 不使用数组
var climbStairs = function (n) {
    if (n < 2) {
        return 1
    }
    let dp0 = 1
    let dp1 = 1
    for (let i = 2; i <= n; i++) {
        const t = dp0
        dp0 = dp1
        dp1 = dp1 + t
    }
    return dp1
};