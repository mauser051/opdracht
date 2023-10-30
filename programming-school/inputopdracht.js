let rl = require('readline-sync');

console.log("choose an path");

console.log("N (north");
console.log("S (sorth");
console.log("e (east");
console.log("W (west");
const answer = rl.question('please input the letter of your choice ');

if (answer == "N"){
    console.log("you are walking when you phone swallow you to the digimon world!")
}
if (answer == "S"){
    console.log("you found an cave, while mining you accidently fall into the void!")
}
if (answer == "e"){
    console.log("you found an holy sword and become the hero, but then the lv99 demon lord spawned and instant kill you. game over")
}
if (answer == "W"){
    console.log("you go underwater, an wild chuchulu apperered. chuchulu used deadly stare! You take 999 trillion damage. you died")
}