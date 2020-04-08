// My Solution
var isPerfectSquare = function (num) {
    var n = 1;
    while (true) {
        if (n * n == num) {
            return true;
        } else if ((n + 1) * (n + 1) > num) {
            return false;
        } else {
            n++;
        }
    }
};

// 根据完全平方数的特性
var isPerfectSquare = function (num) {
    return (num ** 0.5 % 1 == 0) ? true : false;
}; 