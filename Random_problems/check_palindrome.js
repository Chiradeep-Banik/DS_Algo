function checkPalindrome(inputString) {
    var length = inputString.length ;
    if(length%2 == 0 ){
        console.log("even");
        var left = (length/2)-1;
        var right = (length/2);
        console.log(left,right);
        while(left>=0 && right < length){
            if(inputString[left] != inputString[right]) return false;
            left--;
            right++;            
        }
    }else{
        console.log("odd");
        var left = Math.floor(length/2)-1;
        var right = left+2;
        console.log(left,right);
        while(left>=0 && right < length){
            if(inputString[left] != inputString[right]) return false;
            left--;
            right++;            
        }
    }
    return true;
}

console.log(checkPalindrome("az"));
