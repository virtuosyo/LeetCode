// 法一:自写  栈 性能差
var isValid = function (s) {
    let arr = s.split('');
    if (arr.length % 2 !== 0) return false
    let stack = [];
    let flag = true;
    arr.forEach(item => {
        if (item === '(' || item === '[' || item === '{') {
            // 左括号则压入栈
            stack.push(item)
        } else if (item === ')') {
            if (stack[stack.length - 1] === '(') {
                // 遇到右括号先判断栈顶是否为对应的左括号，是就弹栈
                stack.pop()
            } else {
                // 不是则跳出
                flag = false
                return
            }
        } else if (item === ']') {
            if (stack[stack.length - 1] === '[') {
                stack.pop()
            } else {
                flag = false
                return
            }
        } else if (item === '}') {
            if (stack[stack.length - 1] === '{') {
                stack.pop()
            } else {
                flag = false
                return
            }
        }
    })
    // 判断栈是否为空
    return stack.length === 0 && flag ? true : false
};

// -------------------------------------

// 链接：https://leetcode-cn.com/problems/valid-parentheses/solution/javascript-you-xiao-de-gua-hao-by-rhinoc/
// 法二：思路舒服 性能不高 
var isValid = function (s) {
    // 找到最内层的括号对，消去，重复此过程，若存在无法消去的字符则说明字符串无效。
    while (s.length) {
        var temp = s;
        s = s.replace('()', '');
        s = s.replace('[]', '');
        s = s.replace('{}', '');
        if (s == temp) return false
    }
    return true;
};

// 法三:可以边遍历边匹配。也就是遍历的时候遇到左括号存入数组，下次遇到的第一个右括号必须和数组中最后一个元素匹配，否则为无效字符串，匹配完成后从数组中删除此元素。若最终数组为空，表示括号已全部匹配完，字符串有效

var isValid = function (s) {
    if (s.length % 2 !== 0) return false
    var map = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    var leftArr = []
    for (var ch of s) {
        if (ch in map) leftArr.push(ch); //为左括号时，顺序保存
        else { //为右括号时，与数组末位匹配
            if (ch != map[leftArr.pop()]) return false;
        }
    }
    return !leftArr.length //防止全部为左括号
};
console.log(isValid("]"));