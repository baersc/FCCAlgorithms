// Drop the elements of an array (first argument), starting from the front,
// until the predicate (second argument) returns true.

// The second argument, func, is a function you'll use to test the first
// elements of the array to decide if you should drop it or not.

// Return the rest of the array, otherwise return an empty array.

function dropElements(arr, func) {
  const filtered = arr.filter(func);
  if (arr.indexOf(filtered[0]) === -1) {
    return [];
  }
  return arr.slice(arr.indexOf(filtered[0]));
}

const test1 = dropElements([1, 2, 3, 4], n => n >= 3);
// [3, 4]

const test2 = dropElements([0, 1, 0, 1], n => n === 1);
// [1, 0, 1]

const test3 = dropElements([1, 2, 3], n => n > 0);
// [1, 2, 3]

const test4 = dropElements([1, 2, 3, 4], n => n > 5);
// []

const test5 = dropElements([1, 2, 3, 7, 4], n => n > 3);
// [7, 4]

const test6 = dropElements([1, 2, 3, 9, 2], n => n > 2);
// [3, 9, 2]

console.log('test1: ', test1);
console.log('test2: ', test2);
console.log('test3: ', test3);
console.log('test4: ', test4);
console.log('test5: ', test5);
console.log('test6: ', test6);

