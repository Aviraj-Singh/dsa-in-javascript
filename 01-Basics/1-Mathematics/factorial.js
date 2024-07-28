/* 
Write a factorial program to find factorial of a number N. 

Note: 
Factorial of a non-negative integer is the multiplication of all positive integers smaller than or equal to n. 
For example factorial of 6 is 6*5*4*3*2*1 which is 720. 
*/

//Iterative Approach

function factorial(n) {
    if (n < 0) {
        return 0;
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        let fact = 1;
        for (let i = 2; i <= n; i++) {
            fact = fact*i;
        }
        return fact;
    }
}

/* 
Time Complexity: O(n)
Auxiliary Space: O(n)
*/

// Recursive Approach

function factorialRecursive(n) { 
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

/* 
Time Complexity: O(n)
Auxiliary Space: O(n)
*/

const num = 5;
console.log('Factorial of the number is: ', factorial(num));
console.log('Factorial of the number using recursion is: ', factorialRecursive(num));