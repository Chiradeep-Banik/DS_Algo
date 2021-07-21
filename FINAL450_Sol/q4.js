var arr = [0,2,1,2,0];
var arr_obj ={ 0:0
            ,1:0,
            2:0
};

for(let i = 0; i < arr.length; i++){
    if(arr[i]==0){
        arr_obj[0]++;
    }else{
        if (arr[i]==1){
            arr_obj[1]++;
        } else {
            arr_obj[2]++;
        }
    }
}
console.log(arr_obj);
arr = [];
for (let i = 0; i < arr_obj[0]; i++) {
    arr.push(0);
}
for (let i = 0; i < arr_obj[1]; i++) {
    arr.push(1);
}
for (let i = 0; i < arr_obj[2]; i++) {
    arr.push(2);
}
console.log(arr);
