//Given a sorted array of n integers, find the starting and ending position of a given target value.

/**
 * Binary search as it is a sorted array 
 * 
 * and we keep looking even when we find the target to get the left most or right most index
 * 
 * time complexity: O(log n)
 * 
*/

var ar = [5,7,7,8,8,8,8,8,8,10];
var target = 7;
function position(ar,target){
    var result = [-1,-1];
    left_index(ar,target,result);
    right_index(ar,target,result);

    return result;
}
function left_index(ar,target,result){
    var left = 0
    var right = ar.length-1;
    while(left<=right){
        var mid = Math.floor((left+right)/2);
        if(ar[mid] == target) result[0] = mid;
        if(ar[mid] >= target) right = mid-1;
        else left = mid+1;
    }
}
function right_index(ar,target,result){
    var left = 0
    var right = ar.length-1;
    while(left<=right){
        var mid = Math.floor((left+right)/2);
        if(ar[mid] == target) result[1] = mid;
        if(ar[mid] <= target) left = mid+1;
        else right = mid-1;
    }
}

console.log(position(ar,target));