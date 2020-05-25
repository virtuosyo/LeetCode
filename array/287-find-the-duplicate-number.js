/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let counts = []
    nums.forEach(item => {
        if (!counts[item]) {
            counts[item] = 0
        }
        counts[item]++
    })
    let max = 0
    counts.forEach(item => {
        if (item > max) {
            max = item
        }
    })
    return counts.indexOf(max)
};
// var findDuplicate = function(nums) {
//     for(let i = 0; i < nums.length; i++) {
//         if(nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
//             return nums[i]
//         }
//     }
// };