var arr= [7,10,4,3,20,15]
var k = 3

arr.sort ( (a,b) => (a-b))

console.log("The kth element is : ",arr[k-1]);


//O(n) = nlogn -- quicksort