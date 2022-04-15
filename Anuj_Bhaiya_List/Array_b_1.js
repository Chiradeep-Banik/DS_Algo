var majorityElement = (nums)=>{
    var majority_obj ={};
    for(let i=0;i <nums.length;i++){
        if(!majority_obj[nums[i]]){
            majority_obj[nums[i]] = 1;
        }else{
            majority_obj[nums[i]]++;
        }
    }
    var max_num=0,max_ele;
    for(var element in majority_obj){
        if(majority_obj[element] > max_num){
            max_num=majority_obj[element];
            max_ele=element;
        }
    }
    return max_ele;
};

console.log(majorityElement([1,2,1]));