// Given a number n, print all primes smaller than or equal to n. It is also given that n is a small number. 

function SieveOfEratosthenes(n) {
    let prime = [];
    for (let i = 0; i <= n; i++) {
        prime[i] = true;
    }

    for (let p = 2; p * p <= n; p++) {
        if (prime[p] === true) {
            for (let i = p * p; i <= n; i += p) {
                prime[i] = false;
            }
        }
    }

    let result = [];
    for (let p = 2; p <= n; p++) {
        if (prime[p]) {
            result.push(p);
        }
    }

    return result;
}

console.log(SieveOfEratosthenes(30));

/*
Time Complexity: O(n*log(log(n)))
Auxiliary Space: O(n
*/