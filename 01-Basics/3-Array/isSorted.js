// Write a function to check whether an array is sorted or not

function isSorted(arr){
    for (let i = 1; i < arr.length; i++){
        if (arr[i]<arr[i-1]){
            return false;
        }
    }
    return true;
}

let arr = [1,2,3,4,4,5]
console.log(isSorted(arr));

/*
Time Complexity: O(N)
Auxiliary Space: O(1)
*/