var rl = require("readline-sync");

const vragen = rl.question('wat is 1 + 1? ');


if (vragen == 2){
    return console.log("good")
} else{
    return console.log('nope')
}