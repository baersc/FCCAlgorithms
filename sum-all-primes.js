// // Sum all the prime numbers up to and including the provided number.

// // A prime number is defined as a number greater than one and having only two
// // divisors, one and itself. For example, 2 is a prime number because it's
// // only divisible by one and two.

// // The provided number may not be a prime.

// jshint esversion:6
function sumPrimes(num) {
  let primes = [2];

  function findPrime(val) {
    for (let j = 2; j < val; j++) {
      if (val % j === 0) return false;
    }
    return true;
  }

  for (let i = 3; i <= num; i++) {
    if (findPrime(i)) primes.push(i);
  }

  return primes.reduce(function(a, b){
    return a + b;
  });
}

let test1 = sumPrimes(10);
// should return a number

let test2 = sumPrimes(10);
// 17

let test3 = sumPrimes(977);
// 73156
