// Find LCM of Two Numbers

/*
In Mathemaetics - 
a x b = LCM(a, b) * HCF (a, b)

LCM(a, b) = (a x b) / HCF(a, b)
*/

function hcf(a, b) {
    if (b === 0) return a;
    return hcf(b, a % b);
  }
  
function lcm(a, b) {
    return (a / hcf(a, b)) * b;
  }
  
console.log('LCM using optimezed method is:', lcm(12,5));

/*
Time Complexity : O(log(min(a,b)))
*/