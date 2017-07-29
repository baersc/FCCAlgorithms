// Perform a search and replace on the sentence using the arguments provided
// and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with
// (after).

// NOTE: Preserve the case of the original word when you are replacing it. For
// example if you mean to replace the word "Book" with the word "dog", it
// should be replaced as "Dog"

function myReplace(str, before, after) {
  let array = str.split(' ');
  const CAPS = /[A-Z]/g;

  function checkCaps(after) {
    let beforeCaps = before.split('');
    let replaceCaps = after.split('');

    for (let j = 0; j < beforeCaps.length; j++) {
      if (beforeCaps[j].match(CAPS)) {
        replaceCaps[j] = replaceCaps[j].toUpperCase();
      }
    }
    return replaceCaps.join('');
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i].match(CAPS) && array[i] == before) {
      array[i] = checkCaps(after);
    } else if (array[i] == before) {
      array[i] = after;
    }
  }

  return array.join(' ');
}

let test1 = myReplace("Let us go to the store", "store", "mall");
// "Let us go to the mall"

let test2 = myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
// "He is Sitting on the couch"

let test3 = myReplace("This has a spellngi error", "spellngi", "spelling");
// This has a spelling error"

let test4 = myReplace("His name is Tom", "Tom", "john");
// "His name is John"

let test5 = myReplace("Let us get back to more Coding", "Coding", "algorithms");
// "Let us get back to more Algorithms"
