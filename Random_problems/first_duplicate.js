// Given an array containing numbers less than its length, find the first duplicate number.

/**
 * Using space -
 *      - Time Complexity: O(n)
 *      - Using hasOwnProperty to check if the key is present in the object
 *      - Space Complexity: O(n)
 *      
 * Without using space -
 *      - Time Complexity: O(n)
 *      - space complexity: O(1)
 *      - looping through the array once
 *      - and makeing the value at its index-1 to be -(of the number at that index)
 *      - While looking we only use the abs(value) of the index
*/

var ar = [2,1,3,7,5,3,2];

function first_dup_using_space (ar){
    var result = -1;
    for (var i = 0; i < ar.length; i++){
        if (ar[i] > ar.length && ar[i] >0) return "Invalid Input";
    }
    var obj = {};
    for (var i = 0; i < ar.length; i++){
        if (obj[ar[i]] > 0) {
            obj[ar[i]]++;
        }else{
            obj[ar[i]] = 1;
        }
        if(Object.values(obj).includes(2)){
            result = ar[i];
            break;
        }
    }
    return result;
}
console.log("Using space :",first_dup_using_space(ar));

function first_dup_without_using_space(ar){
    var result = -1;
    for (var i = 0; i < ar.length; i++){
        if (ar[i] > ar.length && ar[i] >0) return "Invalid Input";
    }

    for (let i = 0; i < ar.length; i++) {
        if(ar[Math.abs(ar[i])-1] > 0){
            ar[Math.abs(ar[i])-1] = -ar[Math.abs(ar[i])-1];
        }else{
            result = Math.abs(ar[i]);
            break;
        }
    }
    return result;
}

console.log("Not using space :",first_dup_without_using_space(ar));