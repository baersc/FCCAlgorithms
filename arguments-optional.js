// Create a function that sums two arguments together. If only one argument is
// provided, then return a function that expects one argument and returns the
// sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should
// return a function.

// Calling this returned function with a single argument will then return the
// sum:

// jshint esversion:6
function addTogether() {
  function makeArray(args) {
    return Array.from(args)
      .filter(n => typeof n === 'number');
  }

  let args = makeArray(arguments);

  if (args.length === 0 ||
     (arguments.length === 2 &&
      args.length < 2)) {
    return undefined;
  } else if (args.length === 2) {
    return args[0] + args[1];
  } else {
    let a = args[0];
    return function(b) {
      let args = makeArray(arguments);
      args.push(a);
      return args.length === 2 ? args[0] + args[1] : undefined;
    };
  }
}

let test1 = addTogether(2, 3);
// 5

let test2 = addTogether(2)(3);
// 5

let test3 = addTogether("http://bit.ly/IqT6zt");
// undefined

let test4 = addTogether(2, "3");
// undefined

let test5 = addTogether(2)([3]);
// undefined
