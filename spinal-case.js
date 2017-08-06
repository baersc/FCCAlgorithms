// Convert a string to spinal case. Spinal case is
// all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\s|_/g, '-')
    .toLowerCase();
}

const test1 = spinalCase('This Is Spinal Tap');
// 'this-is-spinal-tap'

const test2 = spinalCase('thisIsSpinalTap');
// 'this-is-spinal-tap'

const test3 = spinalCase('The_Andy_Griffith_Show');
// 'the-andy-griffith-show'

const test4 = spinalCase('Teletubbies say Eh-oh');
// 'teletubbies-say-eh-oh'

const test5 = spinalCase('AllThe-small Things');
// 'all-the-small-things'

console.log('test1: ', test1);
console.log('test2: ', test2);
console.log('test2: ', test3);
console.log('test3: ', test4);
console.log('test4: ', test4);
console.log('test5: ', test5);
