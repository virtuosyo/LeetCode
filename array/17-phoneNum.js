// 递归思想
const letterCombinations = digits => {
    // 建立电话号码键盘映射
    let phoneNum = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    // 打碎变成数组
    let num = digits.split(''); // 2,3,4
    // 保存键盘映射后的字母内容 23=>['abc','def]
    let code = [];
    num.forEach(item => {
        if (phoneNum[item]) {
            code.push(phoneNum[item])
        }
    });
    let comb = arr => {
        // 临时变量保存前两个组合的结果
        let tmp = [];
        // 外层循环 遍历第一个号码对应字母
        for (let i = 0; i < arr[0].length; i++) {
            for (let j = 0; j < arr[1].length; j++) {
                tmp.push(`${arr[0][i]}${arr[1][j]}`);
            }
        }
        // 用临时变量替换前两个
        arr.splice(0, 2, tmp)
        if (arr.length > 1) {
            comb(arr);
        } else {
            return tmp;
        }
        return arr[0];
    }
    return comb(code);
}
console.log(letterCombinations("23"));


