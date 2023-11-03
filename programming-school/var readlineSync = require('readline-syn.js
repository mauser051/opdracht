var readlineSync = require('readline-sync');
function askRetry() {
    const retry = readlineSync.keyInYN('Wil je de quiz opnieuw proberen? (ja/nee): ');
    return retry;
  }

console.log("hello! welkom bij de quiz");
var vraag1 = readlineSync.question('wat is mijn favorite dier? A,B,C ')
console.log("je antwoord is " + vraag1 + " het goede antwoord is a")
var vraag2 = readlineSync.question('wat is mijn favorite game? A,B,c ')
console.log("je antwoord is " + vraag2 + " het goede antwoord is a")
var vraag3 = readlineSync.question('wat is mijn favorite eten? A,b,c ')
console.log("je antwoord is " + vraag3 + " het goede antwoord is c")
var vraag4 = readlineSync.question('wat is mijn favorite anime? A,b,c ')
console.log("je antwoord is " + vraag4 + " het goede antwoord is A")
var vraag5 = readlineSync.question('hoe oud ben ik? A,b,c ')
console.log("je antwoord is " + vraag5 + " het goede antwoord is B")
