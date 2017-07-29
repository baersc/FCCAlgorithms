// One of the simplest and most widely known ciphers is a Caesar cipher, also
// known as a shift cipher. In a shift cipher the meanings of the letters are
// shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are
// shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a
// decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character
// (i.e. spaces, punctuation), but do pass them on.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write
// your own code.


function rot13(str) { // LBH QVQ VG!
    var arr = [];

    for (var i = 0; i < str.length; i++) {
        if (str[i].match(/\W/)) {                    // RegExp here
            arr.push(str[i]);
        } else {
            arr.push(str.charCodeAt(i));

            if (arr[i] > 77) {
                arr[i] = String.fromCharCode(arr[i] - 13);
            } else  {
                arr[i] = String.fromCharCode(arr[i] + 13);
            }
        }
    }

    var newStr = arr.join("");
    skewer.log(newStr);
    return newStr;
}






var test1 = rot13("SERR PBQR PNZC");
                                     // "FREE CODE CAMP"

var test2 = rot13("SERR CVMMN!");
//                                      // "FREE PIZZA!"

var test3 = rot13("SERR YBIR?");
//                                      // "FREE LOVE?"

var test4 = rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");
//                                      // "THE QUICK BROWN DOG JUMPED OVER THE
//                                      //LAZY FOX."
