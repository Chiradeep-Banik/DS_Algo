function reverseInParentheses(inputString) {
    var pointer_1 = 0;
    var pointer_2 = 0;
    var open_counter = 0;
    while(pointer_1 < inputString.length && pointer_2 < inputString.length) {
        if(open_counter >0){
            if(inputString[pointer_2] == "("){
                open_counter++;
                pointer_2++;
                continue;
            }
            if(inputString[pointer_2] == ")"){
                open_counter--;
                inputString = rev_string(inputString,pointer_1-1,pointer_2);
                if(open_counter == 0){
                    pointer_1 = pointer_2;
                    pointer_2 = pointer_1;
                    continue;
                }
                pointer_2++;
                continue;
            }
            pointer_2++;
        }else{
            if(inputString[pointer_1] == "("){
                open_counter++;
                pointer_1++;
                pointer_2 = pointer_1;
                continue;
            }
            pointer_1++;
            continue;
        }
    }
    var n = inputString.length;
    for(let i = 0 ; i < n ; i++){
        if(inputString[i] == "(" || inputString[i] == ")"){
            inputString = inputString.replace(inputString[i],"");
            i--;
        }
    }
    return inputString;
}
var rev_string = (str,start,end) => {
    var sub_str = str.substring(start,end+1);
    sub_str = sub_str.split("").reverse().join("");
    sub_str = sub_str.replace("(","");
    sub_str = sub_str.replace(")","");
    str = str.replace(str.substring(start,end+1),sub_str);
    return str;
};


const a = "foo(bar(baz))blim";
const b = "foo(bar)bli(baz)m";
const c = "(bar)";
const d = "foo(ba(r(ba))z)m";
console.log(reverseInParentheses(a));