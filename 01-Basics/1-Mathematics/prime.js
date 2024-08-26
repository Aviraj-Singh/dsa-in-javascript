// Find whether a given number is prime or not

function isPrimeNaive(num){
    if (num<=1){
        return false;
    }
    for (let i=2; i<num; i++){
        if (num%i===0){
            return false;
        }
    }
    return true;
}

console.log(isPrimeNaive(12));

/*
Time Complexity : O(n)
Auxiliary space : O(1)
*/

// Efficient Solution - Divisors always appears in pair: check from 2 to square-root(n)

function isPrimeEfficient(num){
    if (num<=1){
        return false;
    }
    for (let i=2; i*i<num; i++){
        if (num%i===0){
            return false;
        }
    }
    return true;
}

console.log(isPrimeEfficient(12));

/*
Time Complexity : O(n)
Auxiliary space : O(1)
*/

// ALternative, most efficient

const isPrime = (n) => {
    if (n <= 1) return false;
    if (n === 2 || n === 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
  
    for (let i = 5; i <= Math.sqrt(n); i = i + 6)
      if (n % i === 0 || n % (i + 2) === 0) return false;
  
    return true;
  }
  
console.log(isPrime(11));

/*
Time complexity: O(sqrt(n))
Auxiliary space: O(1)
*/