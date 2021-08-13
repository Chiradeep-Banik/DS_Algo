//The goal is to do it in place --- space complexity - O(1)

//O(n^2)-space and o(n^2) time approach

function rotateImage_less_effecient(a) {
    var new_a = [];
    for (let i = 0 ; i < a.length ; i++){
        var inp = [];
        for(let j = a[0].length-1 ; j >=0; j--){
            inp.push(a[j][i]);
        }
        new_a.push(inp);
    }
    console.log(new_a);
    return new_a;
}

//O(n^2) time and O(1) space approach

function rotateImage(a) {
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a[0].length; j++) {
            if(i<j){
                var temp = a[i][j];
                a[i][j] = a[j][i];
                a[j][i] = temp;
            }
        }
    }

    for (let i = 0; i < a.length; i++) {
        var start = 0 , end = a[0].length - 1;
        while(start < end){
            var temp = a[i][start];
            a[i][start] = a[i][end];
            a[i][end] = temp;
            start++;
            end--;
        }
    }
    console.log(a);
    return a;
}
rotateImage([[1,2],[3,4]]);
rotateImage([[1,2,3],[4,5,6],[7,8,9]]);