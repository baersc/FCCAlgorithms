// Write a function that splits an array (first argument) into groups the
// length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    var group = [];
    var position = 0;
    
    while(position < arr.length) {
        group.push(arr.slice(position, position+size));
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
