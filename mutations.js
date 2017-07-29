// Return true if the string in the first element of the array contains all of
// the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the
// letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello"
// does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in
// "line" are present in "Alien".


function mutation(arr) {
    for (var i = 0; i < arr[1].length; i++) {
        if (arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase()) === -1) {
            return false;
        }
    }

    return true;
}

var test1 = mutation(["hello", "hey"]);   // false

var test2 = mutation(["hello", "Hello"]); // true

var test3 = mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]); // true

var test4 = mutation(["Mary", "Army"]); // true 

var test5 = mutation(["Mary", "Aarmy"]); // true

var test6 = mutation(["Alien", "line"]); // true

var test7 = mutation(["floor", "for"]); //true

var test8 = mutation(["hello", "neo"]); // false

var test9 = mutation(["voodoo", "no"]); // false
















//WORKS

// arr[0] = arr[0].toLowerCase();
// arr[1] = arr[1].toLowerCase();

// for (var i = 0; i < arr[1].length; i++) {
//     var test = arr[0].indexOf(arr[1][i]);
//     if (test == -1) {
//         return false;
//     }
// }

// return true;
