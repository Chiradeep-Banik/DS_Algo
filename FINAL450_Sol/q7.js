var ar = [1, 2, 3, 4, 5];

function rotate(ar){
    ar.unshift(ar.pop());
    return ar
}
console.log(rotate(ar));
//O(n) - linear