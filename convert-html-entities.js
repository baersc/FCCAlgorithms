// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a
// string to their cor responding HTML entities.

function convertHTML(str) {
  let arr = str.split('');
  const entities = [
    {
       re : '&',
      ent : '&amp;'
    },
    {
       re : "'",
      ent : '&apos;'
    },
    {
       re : '"',
      ent : '&quot;'
    },
    {
       re : '<',
      ent : '&lt;'
    },
    {
       re : '>',
      ent : '&gt;' 
    }
  ];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < entities.length; j++) {
      if (arr[i] === entities[j].re) {
        arr[i] = entities[j].ent;
      }
    }
  }

   return arr.join('');
}

let test1 = convertHTML("Dolce & Gabbana");
// Dolce &​amp; Gabbana

let test2 = convertHTML("Hamburgers < Pizza < Tacos");
// Hamburgers &​lt; Pizza &​lt; Tacos

let test3 = convertHTML("Sixty > twelve");
// Sixty &​gt; twelve

let test4 = convertHTML('Stuff in "quotation marks"');
// Stuff in &​quot;quotation marks&​quot;

let test5 = convertHTML("Shindler's List");
// Shindler&​apos;s List

let test6 = convertHTML("<>");
// &​lt;&​gt;

let test7 = convertHTML("abc");
// abc
