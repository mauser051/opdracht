var rl = require("readline-sync");

const geboortejaar = rl.question('jaar geboren: ');

const geboortemaand = rl.question('maand geboren: ');

const geboortedag = rl.question('dag geboren: ');

function leeftijd(geboortejaar, geboortemaand, geboortedag){
   let now = new Date();
   let birth = new Date(geboortejaar, geboortemaand - 1, geboortedag); 
   let Milliseconds = now - birth;
   let ageYears = Milliseconds / (1000 * 60 * 60 * 24 * 365.25);
   return Math.floor(ageYears);
}

let age = leeftijd(geboortejaar, geboortemaand, geboortedag);
console.log("age is: " + age);