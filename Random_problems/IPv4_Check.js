function isIPv4Address(inputString) {
    var dotts_encountered = 0;
    var ar = [];
    for(let i =0;i< inputString.length;i++){
        if(i == inputString.length-1 && dotts_encountered <3) return false;
        if(i==0 && inputString[i] == '.') return false;
        if(i == inputString.length-1 && inputString[i] == '.') return false;
        if(inputString[i] == '.'){
            if(ar.length>1 && ar[0] == 0){
                return false;
            }
            if(ar.length == 0) return false;
            if(!num_check(ar)) return false;
            dotts_encountered++;
            if(dotts_encountered>3) return false;
            ar =[];
            continue;
        }
        ar.push(parseInt(inputString[i]));
        if(i == inputString.length-1){
            if(ar.length>1 && ar[0] == 0){
                return false;
            }
            if(!num_check(ar)) return false;
            if(dotts_encountered>3) return false;
            ar =[];
            continue;
        }
        Number.isInteger(parseInt(inputString[i]));
    }
    return true;
}
function num_check(ar){
    var num =0;
    for(let i =ar.length-1;i>=0;i--){
        num +=ar[i]*(10**(ar.length-1-i));
    }
    return (0<=num && num<=255);
}

const inputString = "1.233.00.131";
console.log(isIPv4Address(inputString));