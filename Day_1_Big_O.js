// Big-O -- Its is used to give us a concrete structure to compare algorithms.
//       -- Helps us to choose between various viable options.

console.clear();
// clears the console in the begining

// Example -- Add n numbers - algorithm 

// Approach 1--

function add_1(n) {
    var total = 0;
    for (var i = 0; i <= n; i++) {
        total = total + i;
    }
    return total;
}

// Approach 2 --

function add_2(n) {
    return (n * (n + 1) / 2);
}

/* Better algorithm amog the two ?? -- We need to look at various aspects -
             - Time it takes to execute
             - Space it takes up 
*/

// -------------------------------Time Compexity-------------------------------------//

// In order to calculate time we need a timing function

function timer(t1, t2) {
    console.log("Time taken -- " + ((t2 - t1)) + " MilliSec");
    // as the retrun value of performance.now() is in millisecod
}

// for first algo 

var t1 = performance.now();
console.log("Approach 1 == " + add_1(10000000));
var t2 = performance.now();
timer(t1, t2);

// for second algo 

var t1 = performance.now();
console.log("Approach 2 == " + add_2(10000000));
var t2 = performance.now();
timer(t1, t2);

/*  Using time to compare is not a good idea as it varies machine to machine -- 
    So we count the number of operation an algo does.
    For 1st algo -- 
        We have 5n+2 operations
    For 2nd algo --
        We have 3 operations
    
    This gives us an idea why the second algo is much faster
*/

// Big-O -- Tells us about how an algorithm's runtime changes with the input size  --- notation --- O(f(n))

// Big-O -- Always consider the worst case sinario

/*
    Algo 1 -
        O(n) -- linear
    Algo 2 -
        O(1) -- constant 
*/

// Example 2 -- Counting up an down

function count_up_down(n) {
    console.log("Starting from bottom");
    for (var i = 0; i <= n; i++) {
        console.log(i);
    }
    console.log("Reached the top\nGoing Down");
    for (; n >= 0; n--) {
        console.log(n);
    }
    console.log("Reached the bottom again");
}

count_up_down(10);

// Big-O == O(n) -- as it runs two loops which are linear in themselves.

// Example 3 -- Printing pairs

function print_pair(n) {
    var count = 0;
    for (var i = 0; i <= n; i++) {
        for (var j = 0; j <= n; j++) {
            console.log(i, j);
            count++;
        }
    }
    console.log("Total Pairs = ", count);
}

print_pair(5);

// Big-O == O(n²) -- as for every n element n operations are done.

/*
    For Big-O calculation there are some rules -- 
        - Arithmatic operations are constant
        - Assignment and retriving of elements are constant
        - for a loop the Big-O in n multiplied by whatever the Big-O is inside it. 
*/

// Example 4 -- Printing atleast 5 nums

function print_5_max(n) {
    for (var i = 0; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}
print_5_max(3);

// Big-O == O(n) -- as it is only one loop

// Example 5 -- Printing atmost 5 nums

function print_5_min(n) {
    for (var i = 0; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}
print_5_min(3);

//Big-O == O(1) -- constant -- as the input size increases the runtime is still same

//-----------------------------------Space Compexity-------------------------------------------//

/*
    Space complexity generally is also represented by O() -- 
    It depends on the size of the algoritm (Auxillary sapce complexity) and the size of the input

    space compexity = Auxillary space complexity + Input space complexity

    space complexity depends on --
        - For premative datatypes like numbers and booleans -- complexity is constant
        - For strings complexity -- is linearly dependent on the length of the string 
        - For arrays complexity -- is linearly dependent on the length of the array 
*/

// Example 1 -- Sum of the elements of an array

function sum_array(arr) {
    var sum = 0;
    for (let i = 0; i <= arr.length; i++) {
        sum = sum + i;
    }
    return sum;
}
var ar = [1, 2, 3, 4, 5];
console.log("Array sum = ", sum_array(ar));

/*Big-O of the algorithm -- spacae complexity  
            - Auxillary space complexity -- O(1) -- as only two variables are there in the -- 2*4bytes
            - input space complexity -- O(n) -- as an array of n elements - 4*n bytes
            - So total space complexity -- O(n) - (8+ 4n)
*/

/**
 * Big O --- Is the upper bound of the algorithm --- i.e. time taken in the worst case scinerio
 * Big Ω --- Is the lower bound of the algorithm --- i.e. time taken tin the best case scinerio
 * Big Θ --- It is the average case scinerio for the algorithm
 */
