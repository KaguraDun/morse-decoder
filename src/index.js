const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  const SYMBOL_LENGTH = 10;
  const DOT = "10";
  const DASH = "11";
  const SPACE = "**********";
  let answer = "";

  for (let i = 0; i < expr.length - 1; i += SYMBOL_LENGTH) {
    let tempString;
    let tempSymbol;
    let tempAnswer = "";

    tempString = expr.slice(i, i + SYMBOL_LENGTH);

    if (tempString == SPACE) {
      answer += " ";
    } else {
      for (let j = 0; j < tempString.length - 1; j += 2) {
        tempSymbol = tempString.slice(j, j + 2);

        if (tempSymbol == DOT) tempAnswer += ".";
        if (tempSymbol == DASH) tempAnswer += "-";
      }
    }

    if (tempAnswer in MORSE_TABLE) {
      answer += MORSE_TABLE[tempAnswer];
    }
  }
  return answer;
}
module.exports = {
  decode,
};
