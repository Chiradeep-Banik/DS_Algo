var arr_1 = [1, 2, 3, 4, 5];
var arr_2 = [1, 2, 3, 4];
function reverse(ar) {
    let length = ar.length;
    for (let i = 0, j = length - 1 - i; i <= j; i++, j--) {
        let temp = ar[i];
        ar[i] = ar[j];
        ar[j] = temp;
    }
    return ar;
}

console.log("Original 1 -", arr_1);
console.log("Reverse 1-", reverse(arr_1));

console.log("Original 2-", arr_2);
console.log("Reverse 2-", reverse(arr_2));

//O(n) - linear time