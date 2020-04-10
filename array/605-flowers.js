// 假设你有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花卉不能种植在相邻的地块上，它们会争夺水源，两者都会死去。

// 给定一个花坛（表示为一个数组包含0和1，其中0表示没种植花，1表示种植了花），和一个数 n 。能否在不打破种植规则的情况下种入 n 朵花？能则返回True，不能则返回False。

// 示例 1:

// 输入: flowerbed = [1,0,0,0,1], n = 1
// 输出: True

// 示例 2:
// 输入: flowerbed = [1,0,0,0,1], n = 2
// 输出: False

// 注意:
// 数组内已种好的花不会违反种植规则。
// 输入的数组长度范围为 [1, 20000]。
// n 是非负整数，且不会超过输入数组的大小。

// 链接：https://leetcode-cn.com/problems/can-place-flowers

// 可以种花的条件
//   1. [0,0,0]
//   2. [0,0,1,0,0]
// 思路:遍历数组 
//  边界判断:
//    1.如果第一个元素为0,那么判断一下右边是否能种,即flowerbed[1]是否为0
//     计数器++ 由于第一个元素此时可以种花 所以让i跳过flowerbed[1]从第三个开始继续 
//    2.最后一块地能否种花只取决于前面一块地种了没种
//  普通判断:
//    如果元素为0,那么判断其左右是否为0,即连续3个0
//      可以则 加一 并让 i跳过右边元素直接从->next->next开始
// Solution 1
var canPlaceFlowers = function (flowerbed, n) {
    var x = 0;
    // 右边界补充一个0 最后一块地能否种花取决于前面一块地
    // 但判断条件设为了前后都能种花
    flowerbed.push(0);
    for (var i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            if (i === 0 && flowerbed[1] === 0) {
                x++;
                i++;
            } else if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
                x++;
                i++;
            }
        }
    }
    console.log(x);

    return x >= n;
}

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));