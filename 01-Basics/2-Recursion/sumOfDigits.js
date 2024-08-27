function sumOfDigit(n) {
    if (n === 0) return 0;
    return (n % 10 + sumOfDigit(Math.floor(n / 10)));
}

const num = 12345;
const result = sumOfDigit(num);
console.log(`Sum of digits in ${num} is ${result}`);

/*
Time complexity : O(logn)
Auxiliary space : O(logn)
*/