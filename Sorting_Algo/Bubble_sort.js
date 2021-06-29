/**
 * Bubble sort -- The larger values buble up to the top--
 * We start at the biggining and compare two elemens -- if the first one is larger we swap them--
 * Else we dont and move to the second and thrid element
 * After one loop through the array --- we have the largest no in the last----
 * And now we repeat for the other elements in the array
 */

function Bubble_sort(arr){
    var count =0;
    for(let i = arr.length-1 ; i >=0 ; i--){
        var if_swaped = false;
        for (let k=0; k < i;k++){
            if (arr[k] > arr[k+1]){
                let c = arr[k];
                arr[k] = arr[k+1];
                arr[k+1] = c;
                if_swaped = true;
            }
        }
        if (if_swaped == false) 
            break;
    }
    return arr;
}

console.log(Bubble_sort([4,1,2,3,5,3]));

//O(n) = O(n²)
