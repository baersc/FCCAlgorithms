// Write a function that takes two or more arrays and returns a new array of
// unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in
// their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final
// array should not be sorted in numerical order.

// Check the assertion tests for examples.

// jshint esversion:6
function uniteUnique(arr) {
  let newArr = [];

  for (let i = 0; i < arguments.length; i++) {
    newArr.push(arguments[i]);
  }

  newArr = newArr.reduce(function(a, b) {
    return a.concat(b);
  });

  return newArr.filter(function(a, b) {
    return newArr.indexOf(a) == b;
  });
}

let test1 = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
// [1, 3, 2, 5, 4]

let test2 = uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
// [1, 2, 3, 5]

let test3 = uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
// [1, 2, 3, 5, 4, 6, 7, 8]
