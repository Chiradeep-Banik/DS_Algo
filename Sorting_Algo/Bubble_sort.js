/**
 * Bubble sort -- The larger values bubble up to the top--
 * We start at the biggining and compare two elemens -- if the first one is larger we swap them--
 * Else we dont and move to the second and thrid element
 * After one loop through the array --- we have the largest no in the last----
 * And now we repeat for the other elements in the array
 */
 var ar = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
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
            count++;
        }
        if (if_swaped == false) 
            break;
    }
    console.log(count);
    return arr;
}

console.log(Bubble_sort(ar));

//O(n) = O(n²)
