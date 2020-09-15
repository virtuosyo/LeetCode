/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n < 2) {
        return n
    }
    let arr = [0, 1]
    for (let i = 2; i <= n; i++) {
        arr[i] = (arr[i - 1] + arr[i - 2]) % 1000000007
    }
    return arr[n]
};