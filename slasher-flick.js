// Return the remaining elements of an array after chopping off n elements
// from the head.

// The head means the beginning of the array, or the zeroth index.


function slasher(arr, howMany) {
    for (let i = 0; i < howMany; i++) {
        arr.shift();
    }

    return arr;
}

var test1 = slasher([1, 2, 3], 2);
               // should return [3]

var test2 = slasher([1, 2, 3], 0);
               // should return [1, 2, 3]

var test3 = slasher([1, 2, 3], 9);
               // should return []

var test4 = slasher([1, 2, 3], 4);
               // should return []

var test5 = slasher(["burgers", "fries", "shake"], 1);
               // should return ["fries", "shake"]

var test6 = slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5);
               // should return ["cheese", 4]
