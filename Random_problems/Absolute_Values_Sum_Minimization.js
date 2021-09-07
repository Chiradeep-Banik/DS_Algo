function absoluteValuesSumMinimization(a) {
    var right_sum = [];
    var r_s = 0;
    var left_sum = [];
    var l_s = 0;
    for(let i =0; i< a.length; i++){
        r_s += a[i];
        right_sum.push(r_s-a[i]);
        l_s += a[a.length-1-i];
        left_sum.unshift(l_s-a[a.length-1-i]);
    }
    // console.log(right_sum,"\n",left_sum);
    var min_sum = 0;
    var min_index = 0;
    for (let i = 0; i < a.length; i++) {
        var sum = (a[i]*i - right_sum[i])+(-a[i]*(a.length-i-1)+left_sum[i]);
        // console.log(sum);
        if(i == 0){
            min_sum = sum;
            min_index = i;
        }else{
            if(sum < min_sum){
                min_sum = sum;
                min_index = i;
            }
        }
        // console.log(min_sum,min_index);
    }
    return a[min_index];
}

var a = [-4,-1];
console.log(absoluteValuesSumMinimization(a));