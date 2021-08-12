// Given a sorted array of integers, return an array of the squares of each number, also in sorted order.
/**
 * Using two pointers to go through the array 
 * Comparing the last and first as on squaring they wold be the lasgest
 * 
 * Time Complexity --- O(n)
*/
const ar = [-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10];

function sorted_squared_array(ar){
    if(ar.length === 0) return undefined;
    var result = [];
    for(let start = 0,end = ar.length-1; start <= end;){
        if(ar[start]**2 > ar[end]**2){
            result.unshift(ar[start]**2);
            start++;
        }else{
            result.unshift(ar[end]**2);
            end--;
        }
    }
    return result;
}
console.log(sorted_squared_array(ar));