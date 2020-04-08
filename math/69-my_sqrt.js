var mySqrt = function (x) {
    var re = 1;
    if(x == 0 ) return 0;
    // 当前的re平方小于或等于x 且 re+1后的平方大于x 即夹逼到re 不满足则继续寻找re
    while (!(re * re <= x && (re + 1) * (re + 1) > x)) {
        re++;
    }
    return re;
};