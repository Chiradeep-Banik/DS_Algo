function almostIncreasingSequence(sequence) {
    var count = 0;
    var ind =-10;
    for(let i =0 ; i < sequence.length; i++){
        if(sequence[i]>=sequence[i+1]  && i!= sequence.length-1){
            count++;
            if(i!=0  && i != sequence.length-2 ) ind = i;
        }
        if(i == ind+1){
            ind=0;
            if(sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]){
                count++;
            }
        }
    }
    console.log(count);
    return count <= 1;
}

const sequence = [1, 3, 2, 1];
console.log(almostIncreasingSequence(sequence));
