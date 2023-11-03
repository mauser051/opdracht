var rl = require("readline-sync");

const randomcijfer = Math.floor(Math.random() * 100);

const input = rl.question('raad een nummer')

while (true) {
  const input = rl.question('raad een nummer')

  if (input == randomcijfer) {
    console.log("goed")
    break;
  } else if (input > randomcijfer) {
    console.log("probeer op nieuw")
    console.log("hoger dan cijfer")
  } else if (input < randomcijfer) {
    console.log("probeer opnieuw")
    console.log("lager dan cijfer")
  }
}
console.log(randomcijfer)

