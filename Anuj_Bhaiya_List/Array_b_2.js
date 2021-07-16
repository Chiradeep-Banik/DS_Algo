var majorityElement = (nums) => {
    var length = nums.length;
    var answer_array=[];
    var count_obj={};
    for(var i=0;i<length;i++){
        if(!count_obj[nums[i]]){
            count_obj[nums[i]]=1;
        }else{
            count_obj[nums[i]]++;
        }
    }
    var great = length/3;
    for(var key in count_obj){
        if(count_obj[key]>great){
            answer_array.push(parseInt(key));
        }
    }
    return answer_array;
};

console.log(majorityElement([3,2,3,2]));
