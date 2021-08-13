function reverseInParentheses(inputString) {
    var word = "";
    var word_ar = [];
    for(let i = 0; i<inputString.length ;i++){
        if(inputString[i] == "("){
            var index = i;
            while(1){
                word += inputString[index];
                if(inputString[index] == ")"){
                    word_ar.push(word);
                    inputString = inputString.replace(word, "-");
                    word = "";
                    break;
                }
                index++;
            }
        }
    }
    for(let i = 0,j=0; i<inputString.length ;i++){
        if(inputString[i] == "-"){
            word_ar[j] = word_ar[j].replace("(","");
            word_ar[j] = word_ar[j].replace(")","");
            word_ar[j] = word_ar[j].split("").reverse().join("");
            inputString = inputString.replace(inputString[i], word_ar[j]);
            j++;
        }
    }
    return inputString;
}

const a = "foo(bar(baz))blim";
console.log(reverseInParentheses(a));