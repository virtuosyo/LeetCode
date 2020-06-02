// 快慢指针
var removeDuplicates = function (nums) {
    for (var i=1, j = 0; i < nums.length; i++) {
        if (nums[i] !== nums[j]) {
            j++
            nums[j] = nums[i]
        }
    }
    return j+1
}

// 遍历法
// var removeDuplicates = function (nums) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === nums[i + 1]) {
//             nums.splice(i, 1)
//             i--
//         }
//     }
//     return nums.length
// }