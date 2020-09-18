/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
    if (n === 2) {
        return 1
    }
    if (n === 3) {
        return 2
    }
    if (n % 3 === 0) {
        return Math.pow(3, n / 3)
    }
    if (n % 3 === 1) {
        return Math.pow(3, Math.floor(n / 3) - 1) * 4
    }
    if (n % 3 === 2) {
        return Math.pow(3, Math.floor(n / 3)) * 2
    }
};

var cuttingRope = function (n) {
    const arr = [1, 2, 4, 6, 9]
    while (arr.length < n - 1) {
        arr.push(3 * arr[arr.length - 3])
    }
    return arr[n - 2]
};