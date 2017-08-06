// Write a function that splits an array (first argument) into groups the
// length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  const group = [];
  let position = 0;

  while (position < arr.length) {
    group.push(arr.slice(position, position += size));
  }
  return group;
}

var test1 = chunkArrayInGroups(["a", "b", "c", "d"], 2);
                               // [["a", "b"], ["c", "d"]]

var test2 = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
                               // [[0, 1, 2], [3, 4, 5]]

var test3 = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
                               // [[0, 1], [2, 3], [4, 5]]

var test4 = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
                               // [[0, 1, 2, 3], [4, 5]]

var test5 = chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
                               // [[0, 1, 2], [3, 4, 5], [6]]

var test6 = chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
                               // [[0, 1, 2, 3], [4, 5, 6, 7], [8]]

var test7 = chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
                               // [[0, 1], [2, 3], [4, 5], [6, 7], [8]]

console.log('test1: ', test1);
console.log('test2: ', test2);
console.log('test3: ', test3);
console.log('test4: ', test4);
console.log('test5: ', test5);
console.log('test6: ', test6);
console.log('test7: ', test7);
