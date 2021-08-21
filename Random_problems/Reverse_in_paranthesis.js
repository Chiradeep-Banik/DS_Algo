var index = 0;

function reverseInParentheses(inputString){
    inputString = recursion(0,inputString);
    var ans = "";
    for(var i = 0; i < inputString.length; i++){
        if(inputString[i] != '(' && inputString[i] != ')'){
            ans += inputString[i];
        }
    }
    return ans;
}
var rev_string = (str,start,end) => {
    var sub_str = str.substring(start,end+1);
    sub_str = sub_str.split("").reverse().join("");
    str = str.replace(str.substring(start,end+1),sub_str);
    return str;
};
var recursion = (start,str)=>{
    while(index < str.length){
        if(str[index] == "("){
            str = recursion(++index,str);
        }else if( str[index] ==')'){
            let end = index;
            str = rev_string(str,start,end-1);
            return str;
        }
        index++;
    }
    return str;
};

const a = "foo(bar(baz))blim";
const b = "foo(bar)bli(baz)m";
const c = "(bar)";
const d = "foo(ba(r(ba))z)m";

console.log(reverseInParentheses(a));