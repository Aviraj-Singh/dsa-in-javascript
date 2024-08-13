// Given an integer n, write a function that returns count of trailing zeroes in n!

// Naive Solution

function findTrailingZeroesNaive(n) {
    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact = fact*i;
    }
    let zeroes = 0;
    while (fact%10===0){
        zeroes++;
        fact = fact/10;
    }
    return zeroes;
}

console.log(findTrailingZeroesNaive(10));

/*
Time Complexity : O(log(n)) or O(Number of digits in a given number)
Auxiliary space : O(1) or constant


There are two issues with this approach:
1. Linear Complexity
2. Factorial itself is a large number and we might face integer overflows
*/

function findTrailingZeros(n) {
    if (n < 0) return -1;  
    let count = 0;  
    for (let i = 5; n / i >= 1; i *= 5) {
      count += Math.floor(n / i);
    }  
    return count;
}

console.log(findTrailingZeros(20));

/*
Approach : Trailing 0s in n! = Count of 5s in prime factors of n! = floor(n/5) + floor(n/25) + floor(n/125) + ....
Time Complexity: O(log5n)
Auxiliary Space: O(1)
*/