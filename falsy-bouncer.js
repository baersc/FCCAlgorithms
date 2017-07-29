// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
    arr = arr.filter(function(test){
        return test;
    });

    return arr;
}

var test1 = bouncer([7, "ate", "", false, 9]);
                    // [7, "ate", 9]

var test2 = bouncer(["a", "b", "c"]);
                    // ["a", "b", "c"]

var test3 = bouncer([false, null, 0, NaN, undefined, ""]);
                    // []

var test4 = bouncer([1, null, NaN, 2, undefined]);
                    // [1, 2]

/*                         EXPLANATION
  The .filter() method is already designed to remove false types from it's
  output, but it requires a function as the first argument.
  Therefore, we first have to create a function that accepts an argument, and
  then hands the argument back, as-is, into .filter(). We then let the internal
  structure of .filter() decide which values are true or false.
*/
