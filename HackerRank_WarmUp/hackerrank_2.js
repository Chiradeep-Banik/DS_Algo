/*
input --8
        UDDDUDUU
Ountput -- 1
*/ 
// staring form sealevel -- if down step then a valley.

function countingValleys(steps, path) {
    var sealevel = 0;
    var count = 0;
    for (let i = 0; i < path.length; i++) {
        // two options -- if starts with D we start counting 
        if(path[i] == 'D')
            sealevel--;
        else
            sealevel++;
        if(sealevel == 0 && i != 0 && path[i] != 'D')
            count++;
    }
    return count;
}

console.log(countingValleys(8,"UDDDUDUU"));