function sumOfNos(n) {
    if (n <= 1) {
        return n;
      }
      return n + sumOfNos(n - 1);
}

console.log(sumOfNos(5));

/*
Time complexity : O(n)
Auxiliary space : O(n)
*/