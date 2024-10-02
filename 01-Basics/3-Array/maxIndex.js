/* 
Given an array arr of positive integers. 
The task is to return the maximum of j - i subjected to the constraint of arr[i] < arr[j] and i < j.
*/

// Best Solution

function maxIndexDiff(arr) {
    let n = arr.length;

    let rightMax = new Array(n);

    rightMax[n - 1] = arr[n - 1];
    for (let j = n - 2; j >= 0; j--) {
        rightMax[j] = Math.max(arr[j], rightMax[j + 1]);
    }

    let i = 0, j = 0, maxDiff = -1;
    while (i < n && j < n) {
        if (rightMax[j]>=arr[i]) {
            maxDiff = Math.max(maxDiff, j - i);
            j++;
        } else {
            i++;
        }
    }

    return maxDiff;
}

const arr = [34, 8, 10, 3, 2, 80, 30, 33, 1];

console.log(maxIndexDiff(arr));