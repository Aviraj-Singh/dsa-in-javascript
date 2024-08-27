function printOneToN (n) {
    if (n<=0){
        return;
    }
    printOneToN(n-1);
    console.log(n);
}

printOneToN(5);

/*
Time Complexity: O(N)
Auxiliary Space: O(N)
*/