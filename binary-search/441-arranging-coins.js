/**
 * @param {number} n
 * @return {number}
 */
// 最初思路 桶思想 性能不佳
var arrangeCoins = function (n) {
    let bucket = []
    let index = 0
    let i = 1
    while (n > 0) {
        bucket[index++] = i++
        n -= i
    }
    return bucket.length
};

// 等差数列法
var arrangeCoins = function (n) {
    var x = 1
    while (x * (x + 1) <= 2 * n) {
        x++
    }
    return x - 1
};

// 依次减直到减不够即得
var arrangeCoins = function (n) {
    let r = 0
    while (n > r) {
        r++
        n -= r
    }
    return r
};

// 二分法
var arrangeCoins = function (n) {
    if (n === 0) return 0;
    var low = 0;
    var high = n;
    while (low <= high) {
        var mid = Math.floor((low + high) / 2)
        var costToFinishMid = (1 + mid) * mid / 2;
        if (costToFinishMid === n) {
            return mid;
        } else if (costToFinishMid < n) {
            low = mid + 1;
        } else if (costToFinishMid > n) {
            high = mid - 1;
        }
    }
    return high;
};
