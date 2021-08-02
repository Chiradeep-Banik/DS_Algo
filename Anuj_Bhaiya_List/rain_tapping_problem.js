const ar = [3,1,2,4,0,1,3,2];

var left = [],right = [],max_left = null,max_right = null;

for(let i = 0 ; i < ar.length ; i++){
    var max_left = Math.max(ar[i],max_left);
    left.push(max_left);
    var max_right = Math.max(ar[ar.length-1-i],max_right);
    right.push(max_right);
}

var sum = 0;

for(let i = 0 ; i < ar.length ; i++){
    sum += Math.min(left[i],right[ar.length-1-i]) - ar[i];
}

console.log("water : ",sum);
