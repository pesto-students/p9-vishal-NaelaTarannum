/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.You want to maximize your profit by choosing a single day to buy one stock andchoosing a 
 * different day in the future to sell that stock.Return the maximum profit youcan achieve from this transaction. 
 * If you cannot achieve any profit, return 0.
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let max_so_far = 0;
    let max_profit = 0;
    let a = prices;
    let l = 0
    let r = 1
    if (prices.length == 1) {
        return 0
    }
    while (r < prices.length) {
        if (a[l] > a[r]) {
            l = r;
            r = r + 1;
        }
        else {
            max_so_far = a[r] - a[l];
            r = r + 1

        }
        if (max_so_far > max_profit) {
            max_profit = max_so_far
        }
    }
    return max_profit
};