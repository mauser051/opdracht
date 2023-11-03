function shuffleWord(word){
  const characters = (word).split('');
  for (let i = characters.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [characters[i], characters[j]] = [characters[j], characters[i]];
  }const geshudwoord = characters.join('');
  return geshudwoord
}
var test1 = shuffleWord("test1");
console.log(test1);

var test2 = shuffleWord("test2");
console.log(test2);

var test3 = shuffleWord("test3");
console.log(test3);