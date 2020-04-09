var merge = function (intervals) {
    // 用result来接收结果
    let result = [];
    if (intervals.length == 1 || intervals.length == 0) return intervals;
    // 以区间的左边进行排序
    intervals.sort((a, b) => a[0] - b[0]);
    result.push(intervals.reduce((prev, cur) => {
        // reduce方法上一次的运算结果作为下一次的输入
        // 判断条件 相邻两区间 前一个右边大于等于后一个左边 则会产生重叠部分
        if (prev[1] >= cur[0]) {
            // 进一步判断两者右边的值大小 例如 [3,5] [2,4]
            if (cur[1] > prev[1]) {
                prev[1] = cur[1];
            }
            // 将结果返回作为下一次的输入
            return prev;
        } else {
            // 不满足条件的集合也推入result
            result.push(prev);
            // 返回后一个区间继续下一次
            return cur;
        }
    }));
    return result;
    // return intervals;
    // for (let i = 0; i < intervals.length; i++) {
    //     if (intervals[i][1] >= intervals[i + 1][0]) {
    //         intervals[i][1] = intervals[i + 1][1];
    //     }
    // }
};
console.log(merge(
    [
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18]
    ]
));