/**
 * Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the  digits is equal to the sum of the second half.
 * Given a ticket number n, determine if it's lucky or not.
*/

function isLucky(n) {
    var str = n.toString();
    var s1=0,s2 =0;
    for(let i =0 ; i < str.length ; i++){
        if(i<str.length/2) s1 += parseInt(str[i]);
        else s2 += parseInt(str[i]);   
    }
    if(s1==s2) return true;
    return false;
}
const n = 134008;
console.log(isLucky(n));