// Find HCF of two Numbers

function hcfNaive(a,b){
    let res = Math.min(a,b);
    for (let i=res; i>=1; i--){
        if (a%i===0 && b%i===0){
            res = i;
            break
        }
    }
    return res;
}

console.log('HCF using Naive solution is:', hcfNaive(12,5));

/*
Time Complexity : O(min(a,b))
Auxiliary space : O(1) or constant
*/

// Standard Solution
function hcf(a,b){
    if (b===0){
        return a;
    } else{
        return hcf(b, a%b);
    }
}

console.log('HCF using optimezed method is:', hcf(12,5));

/*
Time Complexity : O(log(min(a,b)))
Auxiliary space : O(1) or constant
*/