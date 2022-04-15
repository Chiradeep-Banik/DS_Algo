/*Sliding window pattern --- usefull when we need to keep track of a subset of data
                             we creat a window(that is a subset or substring) and move the the window 
                             according to our needs.            
*/

//Problem -1 -- Write a function to take an array and calculate the max sum of n conscecutive numbers.

//Approach-1
// Input - [1,2,5,2,8,1,5] , 2   ----- output - 10

function max_con_sum_1(arr, n) {
    var max_num = 0;
    for (let i = 0; i < arr.length; i++) {
        var num = 0;
        for (let j = i; j < (i + n); j++) {
            num = num + arr[j];
        }
        if (i == 0)
            max_num = num;
        else
            if (num > max_num)
                max_num = num;
    }
    return max_num;
}

console.log(max_con_sum_1([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

//O(n) = n²

//Appoarch -2
// Input - [1,2,5,2,8,1,5] , 2   ----- output - 10

function max_con_sum_2(arr, n) {
    var first_sum = 0;
    for (let i = 0; i < (n); i++) {
        first_sum = first_sum + arr[i];
    }
    var max_sum = first_sum;
    for (let i = 1; i < arr.length; i++) {
        if ((i + n - 1) < arr.length) {
            first_sum = first_sum - arr[i - 1] + arr[i + n - 1];
            if (first_sum > max_sum)
                max_sum = first_sum;
        }
    }
    return max_sum;
}
console.log(max_con_sum_2([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
//O(n) = n ---- we created a window that had the sum in it and only subtracted and added to it -- so we went through the loop only once

