function variableName(name) {
    name = name.toLowerCase();
    var no_int_set = new Set();
    no_int_set.add('_');
    var no_set = new Set();
    for (let i = 0; i <10; i++) {
        no_int_set.add(i.toString()); 
        no_set.add(i.toString());       
    }
    for (let i = 0; i < 26; i++) {
        no_int_set.add(String.fromCharCode(i+97));
    }
    for (let i = 0; i < name.length; i++) {
        if(i==0){
            if(no_set.has(name[i])){
                console.log(name[i]);
                return false;
            }
        }
        if(!no_int_set.has(name[i])){
            console.log(name[i]);
            return false;
        }
    }
    return true;
}

var name = "2w2";
console.log(variableName(name));