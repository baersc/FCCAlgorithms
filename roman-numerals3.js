 // This function WORKS!
function convertToRoman(num) {
  let answer = '';
  const ROMANS = [
    { character : 'M',
      value : 1000 },

    { character : 'CM',
      value : 900},

    { character : 'D',
      value : 500 },

    { character : 'CD',
      value : 400},

    { character : 'C',
      value : 100 },

    { character : 'XC',
      value : 90},

    { character : 'L',
      value : 50 },

    { character : 'XL',
      value: 40},

    { character : 'X',
      value : 10 },

    { character : 'IX',
      value : 9},

    { character : 'V',
      value : 5 },

    { character : 'IV',
      value : 4},

    { character : 'I',
      value : 1 }
  ];

  for (let i = 0; i < ROMANS.length; i++) {
    while (ROMANS[i].value <= num) {
      answer += ROMANS[i].character;
      num -= ROMANS[i].value;
    }
  }

  return answer;
}
