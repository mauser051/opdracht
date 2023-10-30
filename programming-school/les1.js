let huidigeTijd = new Date();
console.log(huidigeTijd.getHours());

if(huidigeTijd.getHours() >= 9 && huidigeTijd.getHours() <= 14){
    console.log("je moet naar school")
} else{
    console.log("geen school")
}