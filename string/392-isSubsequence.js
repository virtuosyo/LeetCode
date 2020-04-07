// const isSubsequence = (s, t) => {
//     // 将字符串都转换成数组
//     let test_arr = s.split('');
//     let sample = t.split('');
//     // 判断s中的字符是否都在t中
//     for (let i = 0; i < test_arr.length; i++) {
//         if (sample.indexOf(test_arr[i]) == -1) {
//             return false;
//         }
//     }
//     for (let i = 1; i < test_arr.length; i++) {
//         let p = sample.indexOf(test_arr[i]) - sample.indexOf(test_arr[i - 1]);
//         if (p < 0) {
//             return false;
//         }
//     }
//     return true;

// };
// console.log(isSubsequence("acg", 'ahbgdc'));

var isSubsequence = function (s, t) {
    if (s.length == 0) return true;
    let sStack = s.split('');
    let tStack = t.split('');
    while (tStack.length > 0) {
        let tItem = tStack.pop();
        if (tItem == sStack[sStack.length - 1]) {
            sStack.pop();
            if (sStack.length == 0) return true;
        }
    }
    return false;
};