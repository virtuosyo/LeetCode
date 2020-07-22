/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    const sortFunc = function (a, b) {
        return a - b
    }
    g.sort(sortFunc)
    s.sort(sortFunc)
    let i = 0
    s.forEach(item => {
        if (item >= g[i]) {
            i++
        }
    })
    return i
};