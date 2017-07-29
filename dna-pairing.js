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
  let ele = str.split('');
  let complete = [];

  for (let i = 0; i < ele.length; i++) {
    let match = [];
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
    }

    complete.push(match);
  }

  return complete;
}

let test1 = pairElement("ATCGA");
// [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]

let test2 = pairElement("TTGAG");
// [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]

let test3 = pairElement("CTCTA");
// [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]
