function printNToOne (n) {
    if (n<=0){
        return;
    }
    console.log(n);
    printNToOne(n-1);
}

printNToOne(5);

/*
Time Complexity: O(N)
Auxiliary Space: O(N)
*/