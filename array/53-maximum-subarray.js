/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if (nums.length === 1) {
        return nums[0]
    }
    let max = -Infinity
    for (let i = 0; i < nums.length; i++) {
        let sum = 0
        for (let j = i; j < nums.length; j++) {
            sum += nums[j]
            if (sum > max) {
                max = sum
            }
        }
    }
    return max
};


var maxSubArray = function (nums) {
    let max = -Infinity
    nums.reduce((total, cur, i) => {
        if (total > 0) {
            total += cur
        } else {
            total = cur
        }
        max = max > total ? max : total
        return total
    }, 0)
    return max
};