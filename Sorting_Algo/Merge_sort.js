/**
 * Merge Sort -- Works on divide and conquer and recurssion
 * 
 * - It takes an array and breaks it into two parts.
 * - Keeps breaking them ontill we get two arrays of length 1.
 * - Then we merge them recursively in linear time.
 * 
 * The merging function is O(n)=n - linear and the dividing function is of o(n) = log(n)
 * 
 * So the total complexity of the algorithm is O(n) =n*log(n)
 * 
 * It is better then the elementary sorting algos for fully random arrays , but lags behind  Insertion and bubble sort for almost sorted data.
 */


var ar = [3,44,38,5,47,15,36,26,27,2,46,4,19,0,3,26,50,48];
var count = 0;

function merge(arr1,arr2){
    var arr_res = [];
    if((arr1.length != 0) && (arr2.length != 0)){
        for (var i = 0, j = 0 ; i < arr1.length || j < arr2.length ; ){
            count++;
            var break_point = false;
            if(arr1[i] > arr2[j]){
                arr_res.push(arr2[j]);
                j++;
                if ( j == arr2.length){
                    break_point = false;
                    break;
                }
            }else{
                arr_res.push(arr1[i]);
                i++;
                if(i == arr1.length){
                    break_point = true;
                    break;
                }
            } 
        }
    
        if(break_point == false){
            while (i<arr1.length){
                count++;
                arr_res.push(arr1[i]);
                i++;
            }
        }

        if(break_point == true){
            count++;
            while (j<arr2.length){
                arr_res.push(arr2[j]);
                j++;
            }
        }
    }else{
        if(arr1.length == 0){
            arr_res = arr2
        }else{
            arr_res=arr1;
        }
    }
    console.log("count = ",count);
    return arr_res;
}

function merge_sort(arr){
    if(arr.length <2)
        return arr;
    var middle = Math.floor(arr.length/2);
    var left_arr = arr.slice(0,middle);
    var right_arr = arr.slice(middle,arr.length);

    return merge(merge_sort(left_arr),merge_sort(right_arr));
}

console.log(merge_sort(ar));

//O(n) = n*log(n)(base 2)