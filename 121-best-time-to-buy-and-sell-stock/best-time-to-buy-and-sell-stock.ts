function maxProfit(prices: number[]): number {
    let minIdx = 0, maxIdx = 1, profit = prices[maxIdx] - prices[minIdx];

    if (prices.length === 1) {
        return 0;
    }

    for(let i=maxIdx; i<prices.length; i++) {

        if (prices[i] - prices[minIdx] < 0) {
             minIdx = i;
        }
        
        if (profit < prices[i] - prices[minIdx]) {
            maxIdx = i;
            profit = prices[i] - prices[minIdx];
        }
    }

    return profit;
};