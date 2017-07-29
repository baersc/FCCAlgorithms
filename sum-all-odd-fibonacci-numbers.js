// Given a positionitive integer num, return the sum of all odd Fibonacci
// numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional
// number in the sequence is the sum of the two previous numbers. The first six
// numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers
// less than 10 are 1, 1, 3, and 5.

function sumFibs(num) {
  let total = 0;
  let position = 1;
  let last = 0;

  while (position <= num) {
    if (position % 2 !== 0) {
      total += position;
    }
    let temp = position;
    position += last;
    last = temp;
  }

  return total;
}

let test1 = sumFibs(1);
// Should return a number

let test2 = sumFibs(1000);
// 1785

let test3 = sumFibs(4000000);
// 4613732

let test4 = sumFibs(4);
// 5

let test5 = sumFibs(75024);
// 60696

let test6 = sumFibs(75025);
// 135721
