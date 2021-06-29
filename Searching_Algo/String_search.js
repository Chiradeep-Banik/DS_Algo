//Problem - 1 ---- Write an algorithm to count how many times a substring occure in a string 
//Approach -1

function string_search_1(string,sub_string){
    var init_string = "";
    for (let i = 0; i<sub_string.length; i++) {
        init_string = init_string+string[i];
    }
    var count = 0;
    for (let i = init_string.length; i < string.length;i++){
        init_string = init_string.substr(1,init_string.length) + string[i];
        if(init_string == sub_string)
            count++;
    }
    return count;
}

console.log(string_search_1("My name is chiradeep banik is","a"));
//O(n) = n


//Approach -2

function string_search_2(string,sub_string){
    var count =0;
    for(let i = 0 ; i< string.length;i++){
        if(string[i] == sub_string[0]){
            for(let j =0; j < sub_string.length;j++){
                if( string[i+j] != sub_string[j])
                    break;
                count++;
            }
        }
    }
    return count;
}

console.log(string_search_2("My name is chiradeep banik is","a"));

//O(n) = n²