function min_max(arr){
    let min = arr[0];
    let max =arr[0];
    for(let i =1 ; i < arr.length; i++){
        let val = arr[i];
        if(val > max){
            max = val;
        }
        if(val < min){
            min = val;
        }
    }
    console.log("Min:" + min + " Max:" + max);
}
//O(n) - linear time
// No of comparions = 2n - 1

function min_max_least_comparisions(arr) {
    let n = arr.length;
    let min = null;
    let max = null;
    let i =null;
    if(n%2 == 0){
        if(arr[0]>arr[1]){
            max=arr[0];
            min=arr[1];
        }else{
            max=arr[1];
            min=arr[0];
        }
        i=2;
    }else{
        min = arr[0];
        max = arr[0];
        i=1;
    }
    while(i < n-1){
        if(arr[i] > arr[i+1]){
            if(arr[i]>max){
                max = arr[i];
            }
            if(arr[i+1] < min){
                min = arr[i+1];
            }
        }else{
            if(arr[i+1]>max){
                max = arr[i+1];
            }
            if(arr[i] < min){
                min = arr[i];
            }
        }
        i+=2;
    }
    console.log("Min:" + min + " Max:" + max);
}
var ar = [3,1,4,2,5];
min_max(ar);
min_max_least_comparisions(ar);

//O(n) - linear time
// No of comparions = 3n/2-2