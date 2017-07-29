//Flatten a nested array. You must account for varying levels of nesting.

"use strict";
// jshint esversion:6
function steamrollArray(arr) {
  let flat = [];

  function flatten(n) {
    Array.isArray(n) ? n.forEach(flatten) : flat.push(n);
  }

  arr.forEach(flatten);
  return flat;
}

const tests = {
  test1 : steamrollArray([[["a"]], [["b"]]]),     // ["a", "b"]
  test2 : steamrollArray([1, [2], [3, [[4]]]]),   // [1, 2, 3, 4]
  test3 : steamrollArray([1, [], [3, [[4]]]]),    // [1, 3, 4]
  test4 : steamrollArray([1, {}, [3, [[4]]]])     // [1, {}, 3, 4]
};

console.log(JSON.stringify(tests, null, 2));
