// You will be provided with an initial array (the first argument in the
// destroyer function), followed by one or more arguments. Remove all elements
// from the initial array that are of the same value as these arguments.
'use strict';

function destroyer(arr) {
    function tester(test) {
        return test !== remove;
    }

    for (var i = 1; i < arguments.length; i++) {
        var remove = arguments[i];
        arguments[0] = arguments[0].filter(tester);
    }
    return arguments[0];
}

var test1 = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
                                               // [1, 1]

var test2 = destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
                                               // [1, 5, 1]

var test3 = destroyer([3, 5, 1, 2, 2], 2, 3, 5);
                                               // [1]

var test4 = destroyer([2, 3, 2, 3], 2, 3);
                                               // []

var test5 = destroyer(["tree", "hamburger", 53], "tree", 53);
                                               // ["hamburger"]

/*
  My original function was:

  function destroyer(arr) {
     for (let i = 1; i < arguments.length; i++) {
         var remove = arguments[i];
         var modArr = arguments[0].filter(function(test) {
             return test !== remove;
         });
     return modArr;
     }
  }

  The issue with this is that .filer() method does not modify arguments[0], so
  on each pass through the for loop, modArr was being reassigned with a fresh
  copy of arguments[0] with whatever value arguments[i] happened to be at this
  pass. Essentially erasing the work of the previous iteration. For example:

  destroyer([1, 2, 3, 1, 2, 3], 2, 3);

  firstPass = [1, 3, 1, 3];
  seconPass = [1, 2, 1, 2];

  After the first pass all the 2 values have been removed, but since we are
  performing a second iteration to remove the 3s, the 2 values are copied back
  over from arguments[0].
*/



// function destroyer(arr) {
//     for (let i = 1; i < arguments.length; i++) { 
//         var remove = arguments[i];
//         arguments[0] = arguments[0].filter(function(test) { // <-- arguments[0]
//            return test !== remove;                      // has to be rewritten.
//         });
//     }
//     return arguments[0];
// }
