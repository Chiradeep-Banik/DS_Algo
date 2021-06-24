/*
    input -- 7
                [0,0,1,0,0,1,0]
    outpu - 4

 */
//can jump over 1 place or can jump to the next place
function jumpingOnClouds(c) {
    var count =0;
    for (let i = 0,k=2; i < c.length;){
        if(c[k] != 1){
            i=i+2;
            k=k+2;
        }else{
            i++;
            k++;
        }
        if(i <= c.length)
            count++;
    }
    return(count)
}

console.log(jumpingOnClouds([0,1,0,0,0,1,0]));