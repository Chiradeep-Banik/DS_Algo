var ar_1 = [85,2];
var ar_2 = [85,25,1,32,54,6];
var ar_obj = {};

for (let i = 0; i < Math.max(ar_1.length, ar_2.length); i++){
    if(!ar_obj[ar_1[i]]){
        ar_obj[ar_1[i]] = 1;
    }else{
        ar_obj[ar_1[i]]++;
    }
    if(!ar_obj[ar_2[i]]){
        ar_obj[ar_2[i]] = 1;
    }else{
        ar_obj[ar_2[i]]++;
    }
}
var union = [];

for(var key in ar_obj){
    if(key != 'undefined'){
        union.push(parseInt(key));
    }
}
console.log( "union = ",union);
var intersection = [];
var inter_obj = {};

for (let i = 0; i < ar_1.length; i++){
    if(!inter_obj[ar_1[i]]){
        inter_obj[ar_1[i]] = 1;
    }else{
        inter_obj[ar_1[i]]++;
    }
}
for (let i = 0; i < ar_2.length; i++) {
    if(++inter_obj[ar_2[i]]>1){
        intersection.push(ar_2[i]);
    }
}
console.log("intersection = ",intersection);

//O(n+m)