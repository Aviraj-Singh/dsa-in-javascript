/*
Given an integer, write a function that returns true if the given number is palindrome, else false. 
For example, 12321 is palindrome, but 1451 is not palindrome. 
*/
function palindrome(n){
    if (n===0) return false;
    let num = n
    let rev = 0;
    while (num!==0){
        rev = rev*10 + num%10;
        num = Math.floor(num/10);
    }
    if (rev===n){
        return true;
    } else{
        return false;
    }
}

const num = 56677665;
console.log('Is Palindrome? ',palindrome(num));

/* 
Time Complexity : O(log(n)) or O(Number of digits in a given number)
Auxiliary space : O(1) or constant
*/