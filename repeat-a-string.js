// Repeat a given string (first argument) num times (second argument). Return
// an empty string if num is not a positive number.

function repeatStringTimes(str, num) {
    var newStr = "";
    for (var i = 0; i < num; i++) {
        newStr = newStr.concat(str);
    }
    return newStr;
}

var run = repeatStringTimes('abc', -2);
