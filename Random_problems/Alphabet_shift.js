function alphabeticShift(inputString) {
    var ans="";
    for(let i =0; i< inputString.length;i++){
        let ch = inputString[i];
        let ind = ch.charCodeAt();
        ind++;
        if(ind == 123){
            ind = 97;
        }
        ans+=String.fromCharCode(ind);

    }
    return ans;
}

var name = 'crazy';
console.log(alphabeticShift(name));