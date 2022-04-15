// Given an array of integers, find the product of all the elements except the current one. And return it as a array.

/**
 * Using array pre-prosessing
 * 
 * - making two arrays containing the left products and right products
 * - then multiplying them.
*/

var ar = [-2,2,3,4,5];

function product_except_self(ar){
    var left = [];
    var right = [];
    var left_product = 1;
    var right_product = 1;
    for (let i = 0; i < ar.length; i++){
        left.push(left_product);
        left_product *= ar[i];
    }
    for(let i = ar.length - 1; i >= 0; i--){
        right.unshift(right_product);
        right_product *= ar[i];
    }
    var result = [];
    for (let i = 0; i < ar.length; i++){
        result.push(left[i] * right[i]);
    }
    return result;
}
console.log(product_except_self(ar));