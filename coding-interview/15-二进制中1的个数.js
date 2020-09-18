/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    let t = n.toString(2).split('')
    let res = 0
    for (let i = 0; i < t.length; i++) {
        if (t[i] === '1') {
            res++
        }
    }
    return res
};