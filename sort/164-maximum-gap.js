// 法一：简单易懂 人人会写 效率低
// var maximumGap = function (nums) {
//     if (nums.length < 2) return 0
//     nums.sort((a, b) => a - b)
//     var max = 0;
//     for (i = 1; i < nums.length; i++) {
//         if (nums[i] - nums[i - 1] >= max) {
//             max = nums[i] - nums[i - 1]
//         }
//     }
//     return max;
// };

// 法二:空间完美 时间拉跨
var maximumGap = function (nums) {
    if (nums.length < 2) return 0
    if (nums.length == 2) return Math.abs(nums[0] - nums[1])
    let max = 0;
    let len = nums.length - 1;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            let t = nums[j]
            if (t > nums[j + 1]) {
                nums[j] = nums[j + 1]
                nums[j + 1] = t
            }

        }
        if (i > 0) {
            if (nums[nums.length - i] - nums[nums.length - i - 1] >= max) {
                max = nums[nums.length - i] - nums[nums.length - i - 1]
            }
        }
    }

    return max;
};

console.log(maximumGap([1, 2, 4]))