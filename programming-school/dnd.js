
    const rolldice1 = Math.ceil(Math.random() * 6)
    const rolldice2 = Math.ceil(Math.random() * 6)
    const rolldice3 = Math.ceil(Math.random() * 6)
    const rolldice4 = Math.ceil(Math.random() * 6)


function rollstat(){
   let d1 = rolldice();
   let d2 = rolldice();
   let d3 = rolldice();
   let d4 = rolldice();

   let dice = [d1, d2, d3, d4]

   console.log(dice)

   const lowest = math.min(...dice)

   console.log(dice[1] + dice[2] + dice[3] - lowest)
}

console.log(rollstat)