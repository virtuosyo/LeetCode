/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let s1 = s.trim('').split(' ')
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] === '') {
            s1.splice(i, 1)
            i--
        }
    }
    return s1.reverse().join(' ')
};