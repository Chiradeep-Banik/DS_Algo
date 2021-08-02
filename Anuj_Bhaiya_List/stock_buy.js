const prices =[1, 2, 3, 4, 5];

var max = [];

for (let i = 0; i < prices.length; i++) {
    var max_num = prices[i];
    for(j = i+1 ; j < prices.length; j++) {
        if(prices[j] > max_num) {
            max_num = prices[j];
        }
    }
    max.push(max_num);
}
var profit = max[0] - prices[0];;
for (let i = 1; i < prices.length; i++) {
    if(profit < max[i] - prices[i]) {
        profit = max[i] - prices[i];
    }
}
if(profit < 0) {
    profit = 0;
}
console.log("profit : ",profit);