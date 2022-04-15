//Searching algo -- many types

//Linear search --- looks for a value througout the array or dataset
//                  and check each element 
//                  O(n) = n

//Problem - 1 -- write a linear-search algo

function linear_search(arr,n){
    for (let i = 0; i < arr.length; i++)
        if( n == arr[i])
            return i;
        return -1;
}

console.log(linear_search([1,2,3,4,4,21,3,21,13,32,2,1],1));

// O(n) = n

