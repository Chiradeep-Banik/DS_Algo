// You are given an array of integers representing coordinates of obstacles situated on a straight line.
// Assume that you are jumping from the point with coordinate 0 to the right. 
//You are allowed only to make jumps of the same length represented by some integer.
// Find the minimal length of the jump enough to avoid all the obstacles.

function avoidObstacles(inputArray) {
    let jump = 2;
    for (let i = 0; i < inputArray.length; i++) {
        if(inputArray[i]%jump == 0){
            jump++;
            i=-1;
        }
    }
    return jump;
}

const inputArray = [5, 3, 6, 7, 9];
// const inputArray = [1, 4, 10, 6, 2];
console.log(avoidObstacles(inputArray));