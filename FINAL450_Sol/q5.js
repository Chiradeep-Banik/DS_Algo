var arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6];

let pos_holder = 0;
for (let i = 0; i < arr.length; i++) {
    if(arr[i]<0){
        let temp = arr[i];
        arr[i] = arr[pos_holder];
        arr[pos_holder] = temp;
        pos_holder++;
    }
}
console.log(arr);