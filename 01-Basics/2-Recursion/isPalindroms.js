function recursionCheck(str, i) {
    const n = str.length-1
    if (i>=Math.floor(n/2)){
        return true;
    } else if (str[i]!==str[n-i]){
        return false;
    } 
    return recursionCheck(str, i+1)
}

function isPalindrome(str) {
    return recursionCheck(str.toLowerCase(), 0)
}

console.log(isPalindrome('Malayali'))

/*
Time Complexity: O(n)
Auxiliary Space: O(n)
*/