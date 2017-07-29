// Compare two arrays and return a new array with any items only found in one of
// the two given arrays, but not both. In other words, return the symmetric
// difference of the two arrays.

function diffArray(arr1, arr2) {

  function filter(first, second) {
    return first.filter(function(item) {
      return second.indexOf(item) < 0;
    });
  }

  return filter(arr1, arr2).concat(filter(arr2, arr1));
}





var test1 = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
                         // should return an array.

var test2 = diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
                         // ["pink wool"]

var test3 = diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"],
                      ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
                         //["diorite", "pink wool"]

var test4 = diffArray(["andesite", "grass", "dirt", "dead shrub"],
                      ["andesite", "grass", "dirt", "dead shrub"]);
                         // []

var test5 = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
                         // [4]

var test6 = diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
                         // ["piglet", 4]

var test7 = diffArray([], ["snuffleupagus", "cookie monster", "elmo"]);
                         // ["snuffleupagus", "cookie monster", "elmo"]

var test8 = diffArray([1, "calf", 3, "piglet"], [7, "filly"]);
                         // [1, "calf", 3, "piglet", 7, "filly"]

var testArr1 = [1, 2, 3, 4, 5];
var testArr2 = [1, 2, 3, 4, 5];
