// Return an English translated sentence of the passed binary string.

// The binary string will be space separated.

function binaryAgent(str) {
  let convArr = str.split(' ');
  skewer.log(convArr);

  function convert(num) {
    let places = num.split('');
    let unicode = 0;

    for (let i = 7, n = 1; i >= 0; i--, n *= 2) {
      if (places[i] === '1') unicode += n;
    }
    return unicode;
  }

  let unicode = [];
  for (let j = 0; j < convArr.length; j++) {
    unicode.push(convert(convArr[j]));
  }

  let translated = [];
  for (let k = 0; k < unicode.length; k++) {
    translated.push(String.fromCharCode(unicode[k]));
  }

  return translated.join('');
}

let test1 = binaryAgent("01000001 01110010 01100101 01101110 00100111 " +
                        "01110100 00100000 01100010 01101111 01101110 " +
                        "01100110 01101001 01110010 01100101 01110011 " +
                        "00100000 01100110 01110101 01101110 00100001 " +
                        "00111111");
                    //  "Aren't bonfires fun!?"

let test2 = binaryAgent("01001001 00100000 01101100 01101111 01110110 " +
                        "01100101 00100000 01000110 01110010 01100101 " +
                        "01100101 01000011 01101111 01100100 01100101 " +
                        "01000011 01100001 01101101 01110000 00100001");
                    //  "I love FreeCodeCamp!"



function convert(num) {
  let places = num.split('');
  let unicode = 0;

  for (let i = 8, n = 128; i >= 0; i--, n /= 2) {
    if (places[i] === '1') unicode += n;
  }
  return unicode;
}
