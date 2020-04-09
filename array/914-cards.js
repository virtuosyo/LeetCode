// var hasGroupsSizeX = function (deck) {
//     deck.sort((a, b) => a - b);
//     let min = Number.MAX_SAFE_INTEGER;
//     let dist = [];
//     let result = true;
//     for (let i = 0, len = deck.length, tmp = []; i < len; i++) {
//         tmp.push(deck[i]);
//         for (let j = i + 1; j < len - 1; j++) {
//             if (deck[i] === deck[j]) {
//                 tmp.push(deck[j])
//             } else {
//                 if (min > tmp.length) {
//                     min = tmp.length;
//                 }
//                 dist.push([].concat(tmp));
//                 // 清空数组
//                 tmp.length = 0;
//                 i = j;
//                 break;
//             }
//         }
//     };
//     dist.every(item => {
//         if (item.length % min !== 0) {
//             return false;
//         }
//     })
//     return result;
// };
var hasGroupsSizeX = function (arr) {
    // 存储每张卡牌的总数
    // 修改排序的方式修改为直接统计每个相同字符的数量，思路不变（LeetCode测试用例）
    let group = [];
    let tmp = {};
    arr.forEach(item => {
        tmp[item] = tmp[item] ? tmp[item] + 1 : 1;
    });
    for (let v of Object.values(tmp)) {
        group.push(v);
    };
    // 此时group已经存放的是每张牌的总数了（数组只遍历一遍，避免了排序和正则的耗时）
    // 求两个数的最大公约数
    let gcd = (a, b) => {
        return b == 0 ? a : gcd(b, a % b);
    };
    while (group.length > 1) {
        let a = group.shift();
        let b = group.shift();
        let v = gcd(a, b);
        // 如果最大公约数是1 则不是
        if (v === 1) {
            return false;
        } else {
            group.unshift(v);
        }
    }
    return group.length ? group[0] > 1 : false;
}


console.log(hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3]));