function minesweeper(matrix) {
    var ans = [];
    for (var i = 0; i < matrix.length; i++) {
        var arr = [];
        for (var j = 0; j < matrix[0].length; j++) {
            var sum = 0;
            for(var k = Math.max(i-1,0); k <= Math.min(i+1,matrix.length-1);k++){
                for(var l = Math.max(j-1,0); l <= Math.min(j+1,matrix[0].length-1);l++){
                    if(matrix[k][l] === true){
                        sum++;
                    }
                }
            }
            if(matrix[i][j] === true){
                sum--;
            }
            arr.push(sum);
        }
        ans.push(arr);
    }
    return ans;
}

var matrix = 
[[true, false, false],
[false, true, false],
[false, false, false]];

// var matrix=
// [[true,false,false,true], 
//  [false,false,true,false], 
//  [true,true,false,true]]

console.log(minesweeper(matrix));
