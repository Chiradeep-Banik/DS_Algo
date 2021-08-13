//Using objects to do lookups in constant time
function firstNotRepeatingCharacter(s) {
    if (s.length == 0) return "";
    if (s.length == 1) return s;
    var char_index_obj = {};
    var char_count_obj = {};

    for (var i = 0; i < s.length; i++) {
        var char = s[i];
        char_index_obj[char] = i;
        char_count_obj[char] ? char_count_obj[char]++ : char_count_obj[char] = 1;
    }

    // console.log(char_index_obj, char_count_obj);
    var no_repeat = Object.keys(char_count_obj).filter(function (char) {
        return char_count_obj[char] == 1;
    });
    if (no_repeat.length < 1) return "_";
    // console.log(no_repeat);
    var index = Math.min(...no_repeat.map(function (ind) {
        if (char_index_obj[ind]) return char_index_obj[ind];
        return -1;
    }));
    // console.log(index);
    return s[index];
}

const s = "a";
console.log(firstNotRepeatingCharacter(s));