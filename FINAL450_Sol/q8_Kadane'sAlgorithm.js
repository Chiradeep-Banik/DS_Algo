var ar = [-1,-2,-3,-4,3,6,7,8];


//Brute Force
var max_sum = null;
for (var i = 0; i < ar.length; i++) {
    for (var j = i; j < ar.length; j++) {
        var sum = 0;
        for(var k =0; k <=j; k++){
            sum += ar[k];
        }
        if(max_sum == null || max_sum < sum){
            max_sum = sum;
        }
    }
}
console.log(it);
console.log(max_sum);
//O(n) = n^3
