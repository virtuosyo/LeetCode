/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            return nums[i]
        } else {
            map.set(nums[i], 1)
        }
    }
};