/**
 * Quick Sort -- -It sorts based on recurssion and divide and conqure process
 *  - It picks a pivot element and put all the elements that are smaller than it in one array and all the larger in another.
 *  - The whole array is divided into two parts here.
 *  - Then it recurssively calls itself to perform the same function with each part till we get an array with one element.
 *  - All the left and right sides are then merged togrther with the pivot in between
 *  - thus we get the sorted array from the call stack
 * 
 * O(n) = n* log(n)(base 2) -- as the algorithm calls a smaller part of itself itereatively
 * 
 * It is faster that the elementary sorts in totally random data but lags behind insertion and buble sort in almost sorted datas. 
 * 
 * In the worst case Quick sort degrades to O(n) = n² as we take the smalest or largest element of each arr as pivot
 */


var ar = [3,44,38,5,47,15,36,26,27,2,46,4,19,0,3,26,50,48];
var count =0;
function quick_sort(arr){
    if (arr.length < 2){
        return arr;
    }
    var left_arr=[];
    var right_arr=[];
    var pivot = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot)
            left_arr.push(arr[i]);
        if(arr[i] >= pivot)
            right_arr.push(arr[i]);
        count++;
    }
    console.log(count);
    return quick_sort(left_arr).concat(pivot).concat(quick_sort(right_arr));
}

console.log(quick_sort(ar));