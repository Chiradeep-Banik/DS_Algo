function boxBlur(image) {
    var ans = [];
    for (var i = 1; i < image.length - 1; i++) {
        var arr = [],sum=0;
        for (let j = 1; j < image[i].length-1; j++) {
            sum = image[i-1][j-1]+image[i-1][j]+image[i-1][j+1]+image[i][j-1]+image[i][j]+image[i][j+1]+image[i+1][j-1]+image[i+1][j]+image[i+1][j+1];
            arr.push(Math.floor(sum/9));
        }
        ans.push(arr);
    }
    return ans;
}

// let image = 
// [[7, 4, 0, 1], 
// [5, 6, 2, 2], 
// [6, 10, 7, 8], 
// [1, 4, 2, 0]];
let image = 
[[36,0,18,9], 
[27,54,9,0], 
[81,63,72,45]]

console.log(boxBlur(image));