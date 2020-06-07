/**
 * @param {number[]} bills
 * @return {boolean}
 */
// 1
var lemonadeChange = function (bills) {
    // 零钱袋
    let changeBox = []
    while (bills.length) {
        let money = bills.shift()
        if (money === 5) {
            // 如果是五块 就存进去
            changeBox.push(money)
        } else {
            // 十块或者二十 先计算 需要找零多少
            let change = money - 5
            // 将零钱袋降序排列
            changeBox.sort((a, b) => b - a)
            for (let i = 0; i < changeBox.length; i++) {
                if (changeBox[i] <= change) {
                    change -= changeBox[i]
                    changeBox.splice(i, 1)
                    i--
                }
                if (change === 0) {
                    break
                }
            }
            if (change !== 0) {
                return false
            } else {
                changeBox.push(money)
            }
        }
    }
    return true
};

var lemonadeChange = function (bills) {
    let five = 0
    let ten = 0
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            five++
        } else if (bills[i] === 10) {
            five--
            ten++
        } else {
            if (ten > 0) {
                ten--
                five--
            } else {
                five -= 3
            }
        }
        if (five < 0 || ten < 0) return false
    }
    return true
}