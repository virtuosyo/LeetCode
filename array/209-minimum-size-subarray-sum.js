/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
    let min = 0
    let sum = 0
    for (let i = 0, j = 0; j < nums.length; j++) {
        sum += nums[j]
        while (sum >= s) {
            if (min === 0) {
                min = j - i + 1
            } else {
                min = Math.min(min, j - i + 1)
            }
            sum -= nums[i]
            i++
        }
    }
    return min
};