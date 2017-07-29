// Drop the elements of an array (first argument), starting from the front,
// until the predicate (second argument) returns true.

// The second argument, func, is a function you'll use to test the first
// elements of the array to decide if you should drop it or not.

// Return the rest of the array, otherwise return an empty array.

function dropElements(arr, func) {
  let filtered = arr.filter(func);
  if (arr.indexOf(filtered[0]) === -1) {
    return [];
  } else {
    return arr.slice(arr.indexOf(filtered[0]));
  }
}

let test1 = dropElements([1, 2, 3, 4], function(n) {return n >= 3;});
// [3, 4]

let test2 = dropElements([0, 1, 0, 1], function(n) {return n === 1;});
// [1, 0, 1]

let test3 = dropElements([1, 2, 3], function(n) {return n > 0;});
// [1, 2, 3]

let test4 = dropElements([1, 2, 3, 4], function(n) {return n > 5;});
// []

let test5 = dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;});
// [7, 4]

let test6 = dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;});
// [3, 9, 2]
