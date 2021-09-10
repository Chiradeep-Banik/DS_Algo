//Given an array of equal-length strings, you'd like to know if it's possible to rearrange the order of the elements in such a way that each consecutive pair of strings differ by exactly one character. Return true if it's possible, and false if not.

function stringsRearrangement(inputArray) {
    for (let i = 0; i < inputArray.length; i++) {
        var cur = inputArray[i];
        var count_main = 0;
        for (let j = 0; j < inputArray.length; j++) {
            var temp = inputArray[j];
            var count = 0;
            for (let k = 0; k < cur.length; k++) {
                if(cur[k] !== temp[k]){
                    count++;
                    console.log("count = ",count,"cur[k] = ",cur[k],"temp[k] = ",temp[k]);
                }
            }
            if(count/2 === 1){
                count_main++;
            }
            count = 0;
        }
        if(count_main/2 === 1){
            return false;
        }
        count_main = 0;
    }
    return true;
}

var input = ["aba", "bbb", "bab"];
console.log(stringsRearrangement(input));

var input2 = ["ab", "bb", "aa"];
console.log(stringsRearrangement(input2));
