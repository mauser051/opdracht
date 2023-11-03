var rl = require("readline-sync");

var schooldag1 = "maandag";
var schooldag2 = "dinstdag";
var schooldag3 = "woensdag";
var schooldag4 = "donderdag";
var schooldag5 = "vrijdag";

var weekend = "geen school"

const huidigeTijd = rl.question('');

if (huidigeTijd === "maandag" || huidigeTijd === "dinstdag" || huidigeTijd === "woensdag" || huidigeTijd === "donderdag" || huidigeTijd === "vrijdag") {
    console.log("Ik moet naar school");
} else if (huidigeTijd === "weekend") {
    console.log("Lekker uitslapen!");
}