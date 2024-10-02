/*
Given an array of integers, our task is to write a program that 
efficiently finds the second largest element present in the array. 
*/

function secondLargest(arr){
    let first = arr[0];
    let second = -1;
    for (let i=1; i<arr.length-1; i++){
        if (arr[i]>first){
            second = first;
            first = arr[i];
        }
        else if(arr[i]<first && arr[i]>second){
            second = arr[i];
        }
    }
    return second;
}

const arr = [12, 35, 1, 10, 34, 1];

console.log(secondLargest(arr));