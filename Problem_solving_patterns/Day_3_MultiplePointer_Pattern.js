console.clear();

/*
Multile Pointer - means having two variables like i,j that look through a linear list like array or string
                  Ex- [1,2,3,4,5,6] i =0 j = 6 -- i++ and j-- 
                  gennerally looks for pairs.. 
*/

// Problem -1 --- Write a prgram that looks through a ordered array and return the first pair that has sum zero 
//                and in case no pair sums to zero returns undefined

//Approach -1

function zero_pair_1(arr){
    arr = arr.sort();
    for(let i = 0 ; i < arr.length; i++){
        for(let j = i+1 ; j < arr.length ; j++){
            if((arr[i]+arr[j]) == 0)               
                return([arr[i],arr[j]]);
        }
    }
}

//O(n) = n²

//Approach -2 

function zero_pair_2(arr){
    for(var i=0,j=arr.length-1;arr[i] < 0;){
        if(arr[i]+arr[j] === 0)
            return ([arr[i],arr[j]]);
        else if(arr[i]+arr[j] > 0)
                j--;
            else
                i++;
    }
}
//O(n) = n 

//Problem 2-- Count Unique Value -- counts the unique values in a sorted array

//Approach-1

function count_unique_1(arr){
    for(let i = 0; i<arr.length;i++){
        for(let j = 0; j < arr.length;j++){
            if(arr[i] == arr[j] && i != j )
                arr.splice(j,1);
        }
    }
    return arr.length;
}
count_unique_1([1,2,2,2,3,3,3,3,3,4,4,4,4,5]);

// O(n) = n²

//Approach-2

function count_unique_2(arr){
    var count = 0;
    var count_obj = {};
    for(var i = 0 ; i < arr.length ;i++){
        if(count_obj[arr[i]] > 0)
            count_obj[arr[i]]++;
        else
            count_obj[arr[i]] = 1;
    }
    for(var keys in count_obj){
        count++;
    }
    return count;
}
count_unique_2([1,2,2,2,3,3,3,3,3,4,4,4,4,5]);
//O(n) = n

//Approach -3

function count_unique_3(arr){
    var i =0 ;
    for(var j =1;j <arr.length;j++){
        if(arr[i] !== arr[j]){ 
            i++; 
            arr[i] = arr[j];
        }
    }
    return (i+1);
}

count_unique_3([1,2,2,3,4,4,5,6,6]);

//O(n) = n