var rl = require("readline-sync");

var boodshappenlijst = []

while(true){
    const vraag = rl.question("wil je iets toevroegen of verwijderen(t/v/end) ")

    if (vraag == "t"){
        const lijst = rl.question("wat wil je toevroegen ")
        boodshappenlijst.push(lijst)
        console.log("op de lijst staat" + boodshappenlijst)
    } else if (vraag == "v"){
        const verwijder = rl.question("wat wil je verwijderen ")
        boodshappenlijst.splice(verwijder);
        console.log("op de lijst staat" + boodshappenlijst)
    } else if (vraag == "end"){
        return;
    }
}