// Given an array, write a program to move all the zeros to the end of the array


// Naive Solution

function moveZerosToEnd(arr){
    for (let i=0; i<arr.length; i++){
        if (arr[i]===0){
            for (let j=i+1; j<arr.length; j++){
                if (arr[j]!==0){
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                    break
                }
            }
        }
    }
    return arr
}

let arr = [0,2,1,0,7];
console.log(moveZerosToEnd(arr));

/*
Time Complexity: O(N*N)
Auxiliary Space: O(1)
*/

// Efficient Solution

function moveZeros(arr){
    let count = 0;
    for (let i=0; i<arr.length; i++){
        if (arr[i]!==0){
            [arr[i], arr[count]] = [arr[count], arr[i]];
            count++;
        }
    }
    return arr
}

let arr1 = [0,2,1,0,1,7,0];

console.log(moveZeros(arr1));

/*
Time Complexity: O(N)
Auxiliary Space: O(1)
*/