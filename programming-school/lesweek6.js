function randomwoord(inputString) {
    let outputString = '';
    for (let i = 0; i < inputString.length; i++) {
      const random = Math.random();
      if (random < 0.5) {
        outputString += inputString[i].toUpperCase();
      } else{
        outputString += inputString[i].toLowerCase();
      }
    }
    return outputString;
  }
  
  const input = 'hey';
  const output = randomwoord(input);
  console.log(output);
  