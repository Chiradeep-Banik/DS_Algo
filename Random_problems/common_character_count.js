//using hash maps for constant time lookup

function commonCharacterCount(s1, s2) {
    var char_1_obj = {},char_2_obj = {};
    for(let i = 0; i < s1.length; i++){
        if(char_1_obj[s1[i]]){
            char_1_obj[s1[i]]++;
        }else{
            char_1_obj[s1[i]] =1;
        }
    }
    for(let i = 0; i < s2.length; i++){
        if(char_2_obj[s2[i]]){
            char_2_obj[s2[i]]++;
        }else{
            char_2_obj[s2[i]] =1;
        }
    }
    console.log(char_1_obj,char_2_obj);
    var count =0;
    for(key in char_1_obj){
        if(char_2_obj[key]){
            count+=Math.min(char_1_obj[key],char_2_obj[key]);
        }
    }
    return count;
}
