console.clear();
/*
//Using or Learnig various patterns ----

// Freyency Counter--Avoids nested loops
/* Problem 1 -- 
    Write a function , that takes  2 arrays as inputs and returns true if each element of one array has the square of 
    itself in the other array. The order doesnot matter. Frequency must be same.
*/ 
// Approuch 1-
    
    //test case [1,2,3,3] => [4,9,1,9]

    function same(arr1,arr2){
        //make an object to store the frequency of the elements
        if(arr1.length != arr2.length)
            return false;
        else
            for(let i = 0 ; i < arr1.length; i++){
                for(let j = 0 ; j< arr2.length;j++){
                    if(arr2[j] == arr1[i]**2)
                        arr2.splice(j,1);                                                          
                }
            }
            if (arr2.length === 0)
                return true;
            else
                return false;            
    }                                                    
    console.log(same([1,2,3,3],[4,9,1,9]));
    // O(n) = n²

// Approuch 2-

    //test case [1,2,3,3] => [4,9,1,9]
    function same_2(arr1,arr2){
        var arr1_object={};
        var arr2_object={};
        if(arr1.length != arr2.length)
            return false;
        else
            for (let i = 0 ; i < arr1.length; i++){
                if(arr1_object[arr1[i]] > 0)
                    arr1_object[arr1[i]]++;
                else
                    arr1_object[arr1[i]] = 1;
                if(arr2_object[arr2[i]] > 0)
                    arr2_object[arr2[i]]++;
                else
                    arr2_object[arr2[i]] = 1;                    
            }
            for(key in arr1_object){
                if(!(key**2 in arr2_object))
                   return false; 
                if(arr2_object[key**2] != arr1_object[key])
                    return false;
            }
            return true;
    }
    console.log(same_2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]));
    // O(n) = n -- as retriving in a object is constant in complexity

// comparing the time taken by both approuches  

function timer(t1, t2) {
    console.log("Time taken -- " + ((t2 - t1)) + " MilliSec");
    // as the retrun value of performance.now() is in millisecod
}
var a1 = [];
var a2 = [];
for (var i = 1; i <= 10000; i++) {
   a1.push(i);
   a2.push(i*i);
}
 
var t1 = performance.now();
console.log("Approach 1 == " + same(a1,a2));
var t2 = performance.now();
timer(t1, t2);

var a1 = [];
var a2 = [];
for (var i = 1; i <= 10000; i++) {
   a1.push(i);
   a2.push(i*i);
}

var t1 = performance.now();
console.log("Approach 2 == " + same_2(a1,a2));
var t2 = performance.now();
timer(t1, t2);

// The time comparison clearly shows the difference in performance

/*Problem -2 --- Write a function that takes two string that look say if one os anagram of athe other.
                Anagram means the letters must olso appear in the same frequency
*/

//test case -- "iceman","cinema"

// Approach -1

function is_anagram_1(str1,str2){
    if(str1.length != str2.length)
        return false;
    else
        for(let i = 0 ; i < str1.length; i++){
                for(let j = 0 ; j< str2.length;j++){
                    if(str2[j] == str1[i])
                        str2 = str2.slice(0,j-1) + str2.slice(j+1, str2.length);
                }                                                          
        }
        if (str2.length == 0)    
            return true;
        else
            return false;
}
// O(n) = n²


//Approach -2
function is_anagram_2(str1,str2){
    if(str1.length != str2.length)
        return false;
    else
        var str1_obj = {};
        var str2_obj = {};
        for (let i = 0 ; i < str1.length; i++){
                if(str1_obj[str1[i]] > 0)
                    str1_obj[str1[i]]++;
                else
                    str1_obj[str1[i]] = 1;
                if(str2_obj[str2[i]] > 0)
                    str2_obj[str2[i]]++;
                else
                    str2_obj[str2[i]] = 1;                    
            }
        for(key in str1_obj){
            if(!(key in str2_obj))
                return false;
            if(str1_obj[key] != str2_obj[key])
                return false;
        }
        return true;
}
//O(n) = n

// Time analysis for the two approuches
var a1 = [];
var a2 = [];
for (var i = 80; i <= 120; i++) {
   a1.push(i.toString());
   a2.push(i).toString();
}


var t1 = performance.now();
console.log("Approach 1 == " + is_anagram_1(a1,a2));
var t2 = performance.now();
timer(t1, t2);

var a1 = [];
var a2 = [];
for (var i = 80; i <= 120; i++) {
   a1.push(i.toString());
   a2.push(i.toString());
}

var t1 = performance.now();
console.log("Approach 2 == " + is_anagram_2(a1,a2));
var t2 = performance.now();
timer(t1, t2);


//frequency counter is used when we have to work with retiving and manipulating long series of data like an array or string.
// when we need to compare two arrays or string --- inspite of using two loops we can - use objects to compare the 
// elements as they allow retriving and removing in const time

  