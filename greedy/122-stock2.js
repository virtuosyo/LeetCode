const maxProfit = prices => {
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        let tmp = prices[i] - prices[i - 1]
        if (tmp > 0) {
            profit += tmp
        }
    }
    return profit;
};

console.log(maxProfit([7,1,5,3,6,4]));