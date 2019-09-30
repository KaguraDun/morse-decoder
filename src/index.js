const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const symbollenght = 10;
    const dot = '10';
    const dash = '11';
    var answer = '';
    for (let i = 0; i < expr.length - 1; i += symbollenght) {
        var tempstring;
        var tempsymbol;
        var tempanswer = '';
        tempstring = expr.slice(i, i + symbollenght);
        if (tempstring == '**********') { answer += ' ' }
        else {
            for (let j = 0; j < tempstring.length - 1; j += 2) {
                tempsymbol = tempstring.slice(j, j + 2);
                if (tempsymbol == dot) { tempanswer += '.'; }
                if (tempsymbol == dash) { tempanswer += '-'; }
            }
        }
        if (tempanswer in MORSE_TABLE) {
            answer += MORSE_TABLE[tempanswer];
        }
    }
    return answer
}
module.exports = {
    decode
}