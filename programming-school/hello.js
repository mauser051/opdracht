// for schoolworks
console.log("Hello world");

console.log("welkom to the game");

console.log("set");
var name = "guardian";
console.log("Name : " + name);

const level = 95;
console.log("level: " + level);

var item1 = "Laser Bow";

var weapon = item1;
console.log("Weapon: "+ weapon);

var skill_1 = "sword fighting";

var skill_2 = "jumping";

var skill_3 = "lighting bolt"
console.log("skills: 1," + skill_1 + ". 2," + skill_2 + ". 3," + skill_3);

var storage = item1;
console.log("storage: " + item1);

sleeping = true;
console.log("sleeping: " + sleeping);

teamates = false;
console.log("teamates: " + teamates)

const gold = 1000;
console.log("gold: " + gold);

const gems = 0;
console.log("gems: " + gems);

const rank = 5;
console.log("rank: " + rank);

const health = 200000;
console.log("hp: " + health)

dead = false;
console.log("dead: " + dead);

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,   // Use the keyboard as input (stdin).
  output: process.stdout  // Use the console as output (stdout).
});

rl.question('What is your name: ', (input) => {
  console.log("Welkom " + input);
  rl.close();
});