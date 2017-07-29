// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

// jshint esversion:6
function fearNotLetter(str) {
  let arr = str.split('');

  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i) + 1;

    if (arr[i + 1] !== undefined &&
        code !== arr[i + 1].charCodeAt(0)) {
      return String.fromCharCode(code);
    }
  }
  return undefined;
}

let test1 = fearNotLetter("abce");
// 'd'

let test2 = fearNotLetter("abcdefghjklmno");
// 'i'

let test3 = fearNotLetter("bcd");
// undefined

let test4 = fearNotLetter("yz");
// undefined
