var nums1 = [1];
var nums2 = [99,113];


var findMedianSortedArrays = function(nums1, nums2) {
    var n1 = nums1.length,n2=nums2.length;
    var total = n1+n2;
    if(total%2 ==0){
        
    }else{
        
    }
    return -13;
};
console.log(findMedianSortedArrays(nums1,nums2));


function search (int,ar){
    var middle = Math.floor(ar.length/2);
    var left = 0,right = ar.length-1;
    while(left<right){
        if(int == ar[middle]) return middle;
        if(int > ar[middle]) left=middle+1;
        else right=middle-1;
    }
}
