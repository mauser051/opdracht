var rl = require("readline-sync");

let cokkie = 0;

function score() {
    return("Je score is: " + cokkie);
}
function clickerGame() {
    while (true) {
        const clicker = rl.question('Wil je verder gaan? (ja/nee): ');
        if (clicker === "ja") {
            cokkie++;
        } else if (clicker === "nee") {
            break; 
        } else {
            console.log("alleen ja en nee");
        }
    }
    
    
    let outcome = score();
    console.log(outcome);
}


clickerGame()
