var firstMissingPositive = function (nums) {
    const newNums = nums.filter(item => item > 0).sort((a, b) => a - b);
    if (newNums[0] > 1 || newNums.length == 0) return 1;
    for (i = 0; i < newNums.length; i++) {
        if (newNums[i + 1] - newNums[i] > 1 || i + 1 == newNums.length) {
            return newNums[i] + 1;
        }
    }
};

var firstMissingPositive = function (nums) {
    nums = nums.filter(item => item > 0);
    // 选择排序 拿到最小值 如果第一个元素不是1直接返回1 如果是1就要比相邻元素差值
    for (let i = 0; i < nums.length; i++) {
        var min = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < min) {
                let t = min
                min = nums[j]
                nums[j] = t
            }
        }
        nums[i] = min
        if (i > 0) {
            if (nums[i] - nums[i - 1] > 1) {
                return nums[i - 1] + 1
            }
        } else {
            if (min !== 1) {
                return 1
            }
        }
    }
    return nums.length ? nums.pop() + 1 : 1
};