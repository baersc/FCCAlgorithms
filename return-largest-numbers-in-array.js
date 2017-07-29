// Return an array consisting of the largest number from each provided
// sub-array. For simplicity, the provided array will contain exactly 4
// sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access
// each member with array syntax arr[i].

function largestOfFour(arr) {
    // You can do this!
    var largest = [];
    for (var i = 0; i < arr.length; i++) {
        var x = 0;
        for (var j = 0; j < arr[i].length; j++) {
            if (x < arr[i][j]) {
                x = arr[i][j];
            }
        }
        largest.push(x);
    }
    return (skewer.log(largest)) + (console.log(largest));
};


var test1 = ([[13, 27, 18, 26],         // [27,5,39,1001]
              [4, 5, 1, 3],
              [32, 35, 37, 39],
               [1000, 1001, 857, 1]]);

var test2 = ([[4, 5, 1, 3],             // [5, 27, 39, 1001]
              [13, 27, 18, 26],
              [32, 35, 37, 39],
              [1000, 1001, 857, 1]]);

var test3 = [[12, 53, 64, 34],          // [64, 2356, 1635, 61]
             [643, 2356, 2345, 12],
             [456, 1635, 754, 21],
             [12, 61, 42, 5]];
