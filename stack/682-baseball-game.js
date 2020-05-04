var calPoints = function (ops) {
    let stack = [];
    let score = 0;
    ops.forEach(item => {
        if (!isNaN(Number(item))) {
            // 判断是否为数字 是 则压栈
            stack.push(item * 1)
        } else if (item === 'C') {
            // 操作C 上一轮得分无效 弹栈操作
            stack.pop()
        } else if (item === 'D') {
            // 上一轮双倍得分 压入
            stack.push(stack[stack.length - 1] * 2)
        } else if (item === '+') {
            // 前两轮成绩之和压入栈
            stack.push(stack[stack.length - 1] + stack[stack.length - 2])
        }
    })
    // 计算最后栈中的得分总和
    score = stack.reduce((prev, cur) => {
        return prev + cur
    })
    return score
};
console.log(calPoints(["5", "2", "C", "D", "+"]));