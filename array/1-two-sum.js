// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

// 示例:
// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]


// 1.暴力
var twoSum = function (nums, target) {
    var new_arr = [];
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] == target - nums[j]) {
                new_arr.push(i);
                new_arr.push(j);
                break;
            }
        };
        if (new_arr.length > 0) {
            break;
        }
    }
    return new_arr;
};


// ES6 map对象写法
// 类HashMap
var twoSum = function (nums, target) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        let k = target - nums[i]
        if (map.has(k)) {
            return [map.get(k), i]
        }
        map.set(nums[i], i)
    }
    return [];
};