// Convert a string to spinal case. Spinal case is
// all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\s|_/g, '-')
    .toLowerCase();
}

let test1 = spinalCase("This Is Spinal Tap");
// "this-is-spinal-tap"

let test2 = spinalCase("thisIsSpinalTap");
// "this-is-spinal-tap"

let test3 = spinalCase("The_Andy_Griffith_Show");
// "the-andy-griffith-show"

let test4 = spinalCase("Teletubbies say Eh-oh");
// "teletubbies-say-eh-oh"

let test5 = spinalCase("AllThe-small Things");
// "all-the-small-things"
