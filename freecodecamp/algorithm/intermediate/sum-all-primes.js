function sumPrimes(num) {

  let sum = 0;
  let primes = [2];

  for (let n = 3; n <= num; n++) {
    
    let tempCount = 0;
    for (let prime of primes) {
      if (n % prime !== 0) {
        tempCount++;
      } 
    }
    
    if (tempCount === primes.length) {
      primes.push(n);
    }
  }

  // sum all the primes
  for (let prime of primes) {
    sum += prime;
  }

  return sum;
}

sumPrimes(17);
