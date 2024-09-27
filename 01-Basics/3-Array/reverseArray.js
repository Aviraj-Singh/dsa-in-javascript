// Write a function to reverse an array

// Naive Approach: Creates New Array

let arr = [1,2,3,4,4,5];

function reversed0(arr){
    let newArr = [];
    for (let i=arr.length-1; i>=0; i--){
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(reversed0(arr));

/*
Time Complexity: O(N)
Auxiliary Space: O(N)
*/


// Efficient Approach: Reverse the original array

function reversed1(arr){
    let low = 0;
    let high = arr.length -1
    while(low<high){
        [arr[low], arr[high]] = [arr[high], arr[low]];
        low+=1;
        high-=1;
    }
    return arr;
}

console.log(reversed1(arr));

/*
Time Complexity: O(N)
Auxiliary Space: O(1)
*/

// Using inbuilt function

arr.reverse();
console.log(arr);