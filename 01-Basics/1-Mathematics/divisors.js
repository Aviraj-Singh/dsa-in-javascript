// Given a natural number n, print all distinct divisors of it.

function printDivisors(n) {
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            console.log(i);
        }
    }
}

console.log("The divisors of 100 are:");
printDivisors(100);

/* 
Time Complexity : O(n) 
Auxiliary Space : O(1)
*/

const printDivisorsOpt = (n) => {
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            if (n / i === i) {
                console.log(i);
            } else {
                console.log(i, n / i);
            }
        }
    }
};

console.log("The divisors of 100 are:");
printDivisorsOpt(100);

/* 
Time Complexity: O(sqrt(n)) 
Auxiliary Space : O(1)
*/

// Printing all the divisors in sorted order:

function printDivisorsSorted(n) {
    let i = 1;
    for (i = 1; i * i < n; i++) {
        if (n % i == 0) {
            console.log(i);
        }
    }

    for (; i >= 1; i--) {
        if (n % i == 0) {
            console.log(n / i);
        }
    }
}

printDivisorsSorted(100);