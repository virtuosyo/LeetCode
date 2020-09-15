/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
    numbers.sort((a, b) => a - b)
    return numbers[0]
};