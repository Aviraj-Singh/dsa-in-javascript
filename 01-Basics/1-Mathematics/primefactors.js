// Program to print all prime factors in JavaScript

function primeFactors(n) {
    // Print the number of 2s that divide n
    while (n % 2 === 0) {
      console.log(2);
      n = n / 2;
    }
  
    // n must be odd at this point. So we can skip
    // one element (Note i = i + 2)
    for (let i = 3; i <= Math.sqrt(n); i = i + 2) {
      // While i divides n, print i and divide n
      while (n % i === 0) {
        console.log(i);
        n = n / i;
      }
    }
  
    // This condition is to handle the case when n
    // is a prime number greater than 2
    if (n > 2) console.log(n);
}

primeFactors(315);

/*
Time Complexity: O(sqrt(n) * log (n) )
Auxiliary Space: O(1)
*/

const printPrimeFactorsOP = n => {
    if(n <= 1) return;
    while(n % 2 === 0) {
        console.log(2);
        n = n / 2;
    }
    while(n % 3 === 0) {
        console.log(3);
        n = n / 3;
    }
    for(let i=5; i*i<=n; i=i+6) {
        while(n % i === 0) {
            console.log(i);
            n = n / i;
        }
        while(n % (i + 2) === 0) {
            console.log(i + 2);
            n = n / (i + 2);
        }
    }
    if(n > 3) console.log(n);
};

printPrimeFactorsOP(315);

/*
Time Complexity: O(sqrt(n) * log (n) )
Auxiliary Space: O(1)
*/