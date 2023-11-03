const rl = require("readline-sync");

console.log("je komt een slijm tegen")

let playerName = "Squall";
let playerHealth = 21;

console.log("je hebt " + playerHealth + "hp")

while(playerHealth > 0){
   const question = rl.question("wil je de slijm aanvallen: [vechten/vluchten]")
   if (question == "vechten"){
       const playerdamage = Math.floor(Math.random() * 10)
       console.log("slime take" + playerdamage)
       const damage = Math.floor(Math.random() * 10)
       playerHealth -= damage
       console.log("the player take" + damage  + "hp"); 
       console.log(playerHealth)
   } else if (question == "vluchten"){
    console.log("je gaat vluchten")
    return;
 } 
}
