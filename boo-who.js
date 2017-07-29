// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

// jshint esversion:6
function booWhoSubmitted(bool) {
  let test = true;
  return typeof bool === typeof test;
}


// The above code is what I submitted to FCC. The code below is the solution I
// was originally aiming for, but I didn't realize that type of returned a
// string.

function booWho(bool) {
  return typeof bool === 'boolean';
}

let test1 = booWho(true);
// true

let test2 = booWho(false);
// true

let test3 = booWho([1, 2, 3]);
// false

let test4 = booWho([].slice);
// false

let test5 = booWho({ "a": 1 });
// false

let test6 = booWho(1);
// false

let test7 = booWho(NaN);
// false

let test8 = booWho("a");
// false

let test9 = booWho("true");
// false

let test10 = booWho("false");
// false
