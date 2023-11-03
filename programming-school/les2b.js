var rl = require("readline-sync");

const age = rl.question('ouder dan 18?');



if (age >= 18){
   console.log("old enough")
const pas = rl.question('heb je pas, ja of nee');
   if (pas === "ja"){
   return console.log("come in")
   } else{
      console.log("you cant go inside")
   }
   
} else{
   console.log("you cant go inside")
}