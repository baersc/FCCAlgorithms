// Find the smallest common multiple of the provided parameters that can be
// evenly divided by both, as well as by all sequential numbers in the range
// between these parameters.

// The range will be an array of two numbers that will not necessarily be in
// numerical order.

//e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is
// evenly divisible by all numbers between 1 and 3.

function smallestCommons(arr) {
  arr = arr.sort();

  let range = (function() {
    let range = [];
    for (let i = arr[0]; i <= arr[1]; i++) {
      range.push(i);
    }
    return range;
  })();

  let count = 0;
  let mult = range[range.length - 1];

  while (count < range.length) {
    count = 0;
    for (let i = range[0]; i <= range[range.length - 1]; i++) {
      if (mult % i === 0) count++;
    }
    mult += range[range.length - 1];
  }
  return mult - range[range.length - 1];
}

let test1 = smallestCommons([1, 5]);
// should return a number

let test2 = smallestCommons([1, 5]);
// 60

let test3 = smallestCommons([5, 1]);
// 60

let test4 = smallestCommons([1, 13]);
// 360360

let test5 = smallestCommons([23, 18]);
// 6056820
