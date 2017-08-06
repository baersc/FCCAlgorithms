// The DNA strand is missing the pairing element. Take each character, get its
// pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided
// character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are
// grouped into one encapsulating array.


// jshint esversion:6
function pairElement(str) {
  const ele = str.split('');
  const complete = [];

  for (let i = 0; i < ele.length; i += 1) {
    const match = [];
    match.push(ele[i]);

    switch (ele[i]) {
      case 'A':
        match.push('T');
        break;
      case 'C':
        match.push('G');
        break;
      case 'G':
        match.push('C');
        break;
      case 'T':
        match.push('A');
        break;
      default:
        match.push('');
    }

    complete.push(match);
  }

  return complete;
}

const test1 = pairElement('ATCGA');
// [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]

const test2 = pairElement('TTGAG');
// [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]

const test3 = pairElement('CTCTA');
// [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]

console.log('test1:\n', test1);
console.log('test2:\n', test2);
console.log('test3:\n', test3);
