/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
    if (s.length === 0) {
        return ' '
    }
    const map = {}
    let arr = s.split('')
    for (let i = 0; i < s.length; i++) {
        if (map[arr[i]]) {
            map[arr[i]]++
        } else {
            map[arr[i]] = 1
        }
    }
    for (let k in map) {
        if (map[k] === 1) {
            return k
        }
    }
    return " "
};