/*
input -- aba
            10
output -- 7
*/
// using object can find the frequency
function repeatedString(s, n) {
    var a_count = 0;
    for (let i = 0; i < s.length; i++) {
        if(s[i] == 'a')
            a_count++;
    }
    if(n%s.length != 0)
        var whole_multi = Math.floor(n/s.length);
    else
        var whole_multi = (n/s.length);
    var count = a_count*whole_multi;

    if(n%s.length != 0){
        var rem =(n%s.length);
        for(let i = 0 ; i < rem ; i++){
            if(s[i] == 'a')
                count++;
        }
    }
    return count;
}

console.log(repeatedString("aba", 10));