// Return true if the passed string is a valid US phone number.

// The user may fill out the form field any way they choose as long as it is a
// valid US number. The following are examples of valid formats for US numbers
// (refer to the tests below for other variants):

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555

// For this challenge you will be presented with a string such as 800-692-7753
// or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone
// number based on any combination of the formats provided above. The area code
// is required. If the country code is provided, you must confirm that the
// country code is 1. Return true if the string is a valid US phone number;
// otherwise return false.

// jshint esversion:6
"use strict";
function telephoneCheck(str) {
  // Good luck!
  const numRe = /[0-9]/g;
  const parensRe = /[\(\)]/;

  function test(str) {
    const multParens = Array.from(str).filter(x => x.match(parensRe));
    const arr = Array.from(str).filter(x => x.match(numRe));
    if (arr.length === 11 && str[0] !== '1' || multParens.length > 2) {
      return false;
    }
    return arr.length === 10 || arr.length === 11;
  }

  const parenOpen = str.indexOf('(');
  const parenClose = str.indexOf(')');
  if (parenOpen === -1 && parenClose === -1){
    return test(str);
  } else if (parenOpen > 0 && parenClose < 0 ||
             parenClose > 0 && parenOpen < 0) {
    return false;
  } else if (parenOpen !== -1 && parenOpen === 0 ||
             parenOpen === 1 ||
             parenOpen === 2) {
    if (parenClose === parenOpen + 4) {
      return test(str);
    } else {
      return false;
    }
  } else if (parenClose !== -1) {
    return test(str);
  } else {
    return false;
  }
}

const tests = {
   test1 : telephoneCheck("555-555-5555"),       //  1: boolean
   test2 : telephoneCheck("1 555-555-5555"),     //  2: true
   test3 : telephoneCheck("1 (555) 555-5555"),   //  3: true
   test4 : telephoneCheck("5555555555"),         //  4: true
   test5 : telephoneCheck("555-555-5555"),       //  5: true
   test6 : telephoneCheck("(555)555-5555"),      //  6: true
   test7 : telephoneCheck("1(555)555-5555"),     //  7: true
   test8 : telephoneCheck("555-5555"),           //  8: false
   test9 : telephoneCheck("5555555"),            //  9: false
  test10 : telephoneCheck("1 555)555-5555"),     // 10: false
  test11 : telephoneCheck("1 555 555 5555"),     // 11: true
  test12 : telephoneCheck("1 456 789 4444"),     // 12: true
  test13 : telephoneCheck("123**&!!asdf#"),      // 13: false
  test14 : telephoneCheck("55555555"),           // 14: false
  test15 : telephoneCheck("(6505552368)"),       // 15: false
  test16 : telephoneCheck("2 (757) 622-7382"),   // 16: false
  test17 : telephoneCheck("0 (757) 622-7382"),   // 17: false
  test18 : telephoneCheck("-1 (757) 622-7382"),  // 18: false
  test19 : telephoneCheck("2 757 622-7382"),     // 19: false
  test20 : telephoneCheck("10 (757) 622-7382"),  // 20: false
  test21 : telephoneCheck("27576227382"),        // 21: false
  test22 : telephoneCheck("(275)76227382"),      // 22: false
  test23 : telephoneCheck("2(757)6227382"),      // 23: false
  test24 : telephoneCheck("2(757)622-7382"),     // 24: false
  test25 : telephoneCheck("555)-555-5555"),      // 25: false
  test26 : telephoneCheck("(555-555-5555"),      // 26: false
  test27 : telephoneCheck("(555)5(55?)-5555")    // 27: false
};

console.log(JSON.stringify(tests, null, 2));
