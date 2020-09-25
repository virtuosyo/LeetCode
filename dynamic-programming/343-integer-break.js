/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
    const arr = [1, 2, 4, 6, 9]
    while (arr.length < n - 1) {
        arr.push(3 * arr[arr.length - 3])
    }
    return arr[n - 2]
};