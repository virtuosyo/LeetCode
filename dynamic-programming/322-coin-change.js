var coinChange = function (coins, amount) {
    let f = [0]
    for (let i = 1; i <= amount; i++) {
        f[i] = Infinity
        // f[i] = min{f[i-coins[0]] + 1, ..., f[i-coins[n-1]] + 1}
        for (let j = 0; j < coins.length; j++) {
            if (i >= coins[j] && f[i - coins[j]] !== Infinity) {
                f[i] = Math.min(f[i - coins[j]] + 1, f[i])
            }
        }
    }
    if (f[amount] === Infinity) {
        // 拼不出为-1
        f[amount] = -1
    }
    return f[amount]
}