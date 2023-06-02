function largestPrimeFactor(number) {
    let prime = 2, max, primeList = [];
    while (prime != 1) {
      if (number % prime == 0) {
        number = number / prime;
        primeList.push(prime)
      } else {prime++}
    }
    return Math.max(...primeList);
  }