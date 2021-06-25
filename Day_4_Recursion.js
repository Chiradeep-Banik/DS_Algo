/**
 * Recursion -- A function that calls itself-- Only stop when a base case hits
 *              Sometimes a cleaner approach to iteration 
 * How functions are called in JS ---
 *  - Uses a data-structure called call stack
 *  - Whenever a function is called it is pushed on top of the call stack
 *  - When the function returns the value -- it is poped of the call stack
 */

//Problem -1 --- For loop like recursion

function for_rec(n){
    if(0 < n){
        console.log(n);
        n--;
        for_rec(n);
    }
    else
        return;

}
for_rec(3);

//Problem -2 --- Sum of all the numbers upto n

function sum(n){
    if( n == 0 )
        return 0;
    else
        return (n + sum(n-1));
}
for (let i = 0; i < 3; i++) {
    console.log("Sum of ",i,"= ",sum(i));
}

//Problem -3 --- Finding the sum of --- 1/1^2+1/2^2+1/3^2+..................+1/n^2

function sum_series_1(n){
    if(n == 1)
        return 1;
    else
        console.log(n,' --- ',(1/n**2));
        return (1/n**2) + sum_series_1(n-1);
}
console.log(sum_series_1(6));

/**
 * When recursion goes wrong
 * - If the base case is wrong 
 * - if the return values are not good 
 * - if we donot call a smaller part of the function
 * - stack over flow --- when the stack size excides
*/
