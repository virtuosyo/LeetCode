// 好像 没什么好说的
var sortArrayByParityII = function (A) {
    var newArr = [];
    var odd = 1;
    var even = 0;
    A.forEach(item => {
        if (item % 2 == 0) {
            newArr[even] = item
            even += 2
        } else {
            newArr[odd] = item
            odd += 2
        }
    })
    return newArr
};