/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
    let result = s.split('')
    for (let i = 0; i < result.length; i++) {
        if (result[i] === ' ') {
            result[i] = '%20'
        }
    }
    return result.join('')
};

var replaceSpace = function(s) {
    return s.replace(/ /g, "%20");
};

var replaceSpace = function (s) {
    let space = 0
    let str = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            space++
        } else {
            str++
        }
    }

    const length = space * 2 + str
    const result = new Array(length)
    for (let i = 0, j = 0; j < s.length; j++) {
        if (s[j] === ' ') {
            result[i++] = '%'
            result[i++] = '2'
            result[i++] = '0'
        } else {
            result[i++] = s[j]
        }
    }
    return result.join('')
};


