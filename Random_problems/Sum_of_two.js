/**
 * Given two integer arrays and a target find if a pair whose sum is equal to the target is present in the arrays or not.
 * 
 * Time Complexity: O(n)
*/

var ar1 = [0,0,-5,3012];
var ar2 = [-10,40,-3,9];
var target = -8;

var ar1_obj = {};  // Using object as it is a hash table and provide -> linear time look-up 

for (var i = 0; i < ar1.length; i++) {
    ar1_obj[target-ar1[i]] = true;
}
var result = false;
for(var i = 0; i < ar2.length; i++) {
    if(ar2[i] in ar1_obj) {
        result = true;
        break;
    }
}
console.log(result);
