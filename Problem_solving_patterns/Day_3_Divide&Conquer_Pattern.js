/**Divide and Conquer --- Breaking down the dataset and looking through it 
*                         decreases the time complexity tremendously
*/ 

/**
 * Problem 1 - Write a functon to look through a sorted array and return the index
 *             of the number searching
 */

//Approach -1 
//Input - [1,2,3,4,5,6],4 ------ Output - 3

function search_1(arr,n){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == n)
            return i;
    }
    return -1;
}
console.log(search_1([1,2,3,4,5,6],6));
//O(n) = n

//Approach -2
//Input - [1,2,3,4,5,6],4 ------ Output - 3

function search_2(arr,n){
    var start = 0 ; 
    var end = arr.length-1;
    for(;start <= end;){
        var middle = Math.floor(((start+end)/2));
        var middle_val = arr[middle];
        if(middle_val > n)
            end = middle-1;
        else
            if (middle_val < n)
                start = middle+1;
            else 
                return middle;

    }
    return -1;
}
console.log(search_2([1,2,3,4,5,6],3));

//O(n) < n -- as we didnt went through the loop of length n

