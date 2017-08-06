// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

// jshint esversion:6
/*
function booWhoSubmitted(bool) {
  const test = true;
  return typeof bool === typeof test;
}
*/


// The above code is what I submitted to FCC. The code below is the solution I
// was originally aiming for, but I didn't realize that type of returned a
// string.

function booWho(bool) {
  return typeof bool === 'boolean';
}

const test1 = booWho(true);
// true

const test2 = booWho(false);
// true

const test3 = booWho([1, 2, 3]);
// false

const test4 = booWho([].slice);
// false

const test5 = booWho({ a: 1 });
// false

const test6 = booWho(1);
// false

const test7 = booWho(NaN);
// false

const test8 = booWho('a');
// false

const test9 = booWho('true');
// false

const test10 = booWho('false');
// false

console.log('test1: ', test1);
console.log('test2: ', test2);
console.log('test3: ', test3);
console.log('test4: ', test4);
console.log('test5: ', test5);
console.log('test6: ', test6);
console.log('test7: ', test7);
console.log('test8: ', test8);
console.log('test9: ', test9);
console.log('test10: ', test10);
