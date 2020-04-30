// 法一：sortAPI简单快捷 时间一般 空间差 
var findKthLargest = function (nums, k) {
    nums.sort((a, b) => b - a);
    return nums[k - 1];
};

// 法二：冒泡排序法
var findKthLargest = function (nums, k) {
    for (i = 0; i < k; i++) {
        for (j = 0; j < nums.length - i - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                var t = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = t
            }
        }
    }
    return nums[nums.length - k];
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))