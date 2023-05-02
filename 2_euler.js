function fiboEvenSum(n) {
  let fibArray = [1,2];
  for (let i = 2; fibArray[i-1] <= n; i++) {
    let a = i - 2;
    let b = i - 1;
    fibArray.push(fibArray[a] + fibArray[b]);
  }
  
  let fibEvenSum = 0;
  for (let i = 0; i < fibArray.length; i++) { 
    if (fibArray[i] % 2 == 0) {
      fibEvenSum += fibArray[i]
    }
  }
  return fibEvenSum;
}