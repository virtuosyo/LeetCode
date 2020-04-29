var isMatch = function (s, p) {
    return new RegExp('^' + p + '$').test(s)
};


var isMatch = function (s, p) {
    // 对模式变量进行正则筛选
    let mode = p.match(/([a-z.]\*)|([a-z.]+(?=([a-z.]\*)|$))/g);
    console.log(mode);

    let cur = 0;
    for (let i = 0; i < mode.length; i++) {
        // 对于模式分成三类 .*|a*|abcd
        // 只要第二位不是* ，那么就是纯字符串
        // 如果第二项是* 那么就是有模式的
        if (mode[i][1] == '*') {
            if (mode[i][0] == '.') {
                // 模式一 任意字符全匹配
                cur = s.length;
                break;
            } else {
                // 模式二 前一个字符出现0次或多次
                while (s[cur] === mode[i][0]) {
                    cur++;
                }
            }
        } 
        else if (mode[i][0] == '.') {
            cur = s.length;
            break;
        } 
        else {
            for (let j = 0; j < mode[i].length; j++) {
                if (mode[i][j] !== s[cur]) {
                    return false;
                } else {
                    cur++;
                }
            }
        }
    }
    console.log(cur);
    
    return cur === s.length;
};

console.log(isMatch("mississippi", "mis*is*p*."));