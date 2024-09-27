// Find the largest element in an array

let arr = [1, 2, 3, -1, -5];
let largest = 0
for (let i=0; i<arr.length; i++){
    if (arr[i]>arr[largest]){
        largest = i;
    }
}

console.log(largest);

/*
Time Complexity: O(N)
Auxiliary Space: O(1)
*/