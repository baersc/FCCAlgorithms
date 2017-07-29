// Check if the predicate (second argument) is truthy on all elements of a
// collection (first argument).

// Remember, you can access object properties through either dot notation or
// [] notation.

function truthCheck(collection, pre) {
  let arr = [];
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].hasOwnProperty(pre)) {
      arr.push(collection[i][pre]);
    }
  } 

  arr = arr.filter(function(test) {
    return test;
  });

  return arr.length === collection.length;
}

let test1 = truthCheck([{"user": "Tinky-Winky", "sex": "male"},
                        {"user": "Dipsy", "sex": "male"},
                        {"user": "Laa-Laa", "sex": "female"},
                        {"user": "Po", "sex": "female"}],
                       "sex");
// true

let test2 = truthCheck([{"user": "Tinky-Winky", "sex": "male"},
                        {"user": "Dipsy"},
                        {"user": "Laa-Laa", "sex": "female"},
                        {"user": "Po", "sex": "female"}],
                       "sex");
// false

let test3 = truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0},
                        {"user": "Dipsy", "sex": "male", "age": 3},
                        {"user": "Laa-Laa", "sex": "female", "age": 5},
                        {"user": "Po", "sex": "female", "age": 4}],
                       "age");
// false

let test4 = truthCheck([{"name": "Pete", "onBoat": true},
                        {"name": "Repeat", "onBoat": true},
                        {"name": "FastFoward", "onBoat": null}],
                       "onBoat");
// false

let test5 = truthCheck([{"name": "Pete", "onBoat": true},
                        {"name": "Repeat", "onBoat": true, "alias": "Repete"},
                        {"name": "FastFoward", "onBoat": true}],
                       "onBoat");
// true

let test6 = truthCheck([{"single": "yes"}], "single");
// true

let test7 = truthCheck([{"single": ""}, {"single": "double"}], "single");
// false

let test8 = truthCheck([{"single": "double"}, {"single": undefined}], "single");
// false

let test9 = truthCheck([{"single": "double"}, {"single": NaN}], "single");
// false
