/**
 * Insertion Sort -- We pick an element and insert it to its correct position in our sortes part
 *                 -- the length of the sortwd part increase after each iteration, from 0 to n
 * 
 *  This sort is great for nearly sorted  data ---- as on this it has almost linear time complexity for that data 
 *  -- It also works best when we keep receiving new data - as we just need to insert it in its correct place. So linear
 */
//[2,3,1,5,4]
//[2,3,1,5,4]
//[2,1,3,5,4]
//[1,2,3,5,4]
//[1,2,3,5,4]
//[1,2,3,4,5]
var ar = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
function insertion_sort(arr){
    var count = 0;
    for (let i = 0; i < arr.length; i++) {
        var no_to_insert = arr[i+1];
        if(arr[i] > no_to_insert){
            for (let j = i; j >=0 ; j--){
                if(no_to_insert < arr[j]){
                    arr[j+1] = arr[j];
                    arr[j] = no_to_insert;
                }
                if(no_to_insert > arr[j-1]){
                    break;
                }
                count++;
            }
        }
        else
            count++;
    }
    console.log(count);
    return arr;
}
var ar2 = insertion_sort(ar);
console.log(ar2);

//O(n) = n²

