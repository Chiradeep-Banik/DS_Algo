//Binary search -- only works on sorted arrays
//                 it always checks if the target is in one half or the other and elemenates the other half

//write a binary search algorithm

function binary_search(arr,n){
    var start =0;
    var end = arr.length -1;
    var middle = Math.floor((start+end)/2);
    while(start<=end){    
        if (n > arr[middle]){
            start = middle+1;
        }else{
            if(n < arr[middle]){
                end = middle -1;
            }else
                return middle;
        }
        middle = Math.floor((start+end)/2);
    }
    return -1;
}
console.log(binary_search([1,2,3,4,5,6,13,24,25],259));

//O(n) = log(n) base 2 --- as it always halves the array till only one element is left 
//                          for 32 we need 5 halving in the worst case. As the length grows the worst case inc two the power of 2