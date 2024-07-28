// Given a number N, the task is to return the count of digits in this number.

function countDigit(n) {
    if (n === 0) return 1;
    let count = 0;
    while (n !== 0) {
      n = Math.floor(n / 10);
      count++;
    }
    return count;
  }
  
  const n = 56;
  console.log(`Number of digits: ${countDigit(n)}`);

//Time Complexity : O(log10(n)) or θ(num digits)
//Auxiliary Space: O(1) or constant