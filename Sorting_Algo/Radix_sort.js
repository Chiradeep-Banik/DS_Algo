/**
 * Radix Sort -- It uses the mathmatical property of the numbers to sort the data
 * 
 *  - First we take the data and sort it according to its units place digit and put it into a bucket
 *  - Then we do combine the bucket to get the unit place sorted array
 *  - We repeat and finally get the sorted array 
 * 
 * Radix sort has time complexity - O(n) = n*k (where k = number of digits) and space complexity - O(n) = n+k
 * 
 * So the radix sort is good for sorting numbers with small digit length but not for longer nums.
 */


var ar = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
var count =0;

// My Approach -- without buckets
function get_digit(num,pos){
    var num_str = Math.abs(num).toString();
    if (pos >= num_str.length)
        return 0;
    return num_str[num_str.length - pos-1];
}
  
function radix_sort_1(arr) {
    var max_element_length = arr[0].toString().length;
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i].toString();
        if(str.length > max_element_length)
            max_element_length = str.length;
    }
    // function that takes -- the array and sorts it based on the digit bin as specified
    var arr_loop_inside =[];
    var arr_res = [];
    for (let i = 0; i < max_element_length; i++) {
        if (i == 0)
            arr_res = arr;
        else{
            arr_res = arr_loop_inside;
            arr_loop_inside = [];
        }
        for (let buc = 0; buc < 10; buc++) {            
            for (let j = 0; j < arr_res.length; j++) {
                var digit = get_digit(arr_res[j],i);
                if (digit == buc){
                    arr_loop_inside.push(arr_res[j]);
                }
            }
        }
    }
    return arr_loop_inside;
} 
console.log(radix_sort_1(ar));

//Optimum Approach -- with buckets
function radix_sort_2(arr){
    var max_element_length = arr[0].toString().length;
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i].toString();
        if(str.length > max_element_length)
            max_element_length = str.length;
    }
    for (let i = 0; i < max_element_length; i++) {
        let bucket = [];
        for (let q = 0; q < 10; q++) {
            bucket.push([]);
        }
        for(let j = 0 ; j < arr.length;j++){
            var digit = get_digit(arr[j],i);
            bucket[parseInt(digit)].push(arr[j]);
            count++;  
        }
        arr = [];
        for(let i = 0 ; i < 10 ; i++){
            arr = arr.concat(bucket[i]);
        }   
    }
    console.log(count);
    return arr;
}

console.log(radix_sort_2(ar));
