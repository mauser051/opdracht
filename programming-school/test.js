var readlineSync = require('readline-sync');

function askRetry() {
  const retry = readlineSync.question('Wil je de quiz opnieuw proberen? (j/ja om opnieuw te spelen, iets anders om te stoppen): ').toLowerCase();
  retry === 'ja';
}

function runQuiz() {
  console.log("Hello! Welkom bij de quiz");

  // Define the questions and correct answers
  const questions = [
    { question: 'Wat is mijn favoriete dier? A, B, C ', correctAnswer: 'a' },
    { question: 'Wat is mijn favoriete game? A, B, C ', correctAnswer: 'a' },
    { question: 'Wat is mijn favoriete eten? A, B, C ', correctAnswer: 'c' },
    { question: 'Wat is mijn favoriete anime? A, B, C ', correctAnswer: 'A' },
    { question: 'Hoe oud ben ik? A, B, C ', correctAnswer: 'b' }
  ];

  let score = 0; // Initialize the user's score

  // Loop through each question and ask the user
  for (const q of questions) {
    const userAnswer = readlineSync.question(q.question).toLowerCase(); // Convert the answer to lowercase for case insensitivity

    if (userAnswer === q.correctAnswer) {
      console.log("Je antwoord is correct!");
      score++; // Increment the score for each correct answer
    } else {
      console.log("Je antwoord is incorrect. Het goede antwoord is " + q.correctAnswer);
    }

    // Limit the score to a maximum of 5
    if (score >= 5) {
      break; // Exit the loop if the maximum score is reached
    }
  }

  console.log(`Je hebt ${score} van de ${Math.min(5, questions.length)} vragen correct beantwoord.`);

  // Ask the user if they want to retry
  const retry = askRetry();
  if (retry) {
    runQuiz(); // If the user wants to retry, run the quiz again
  } else {
    console.log('Bedankt voor het spelen van de quiz!');
  }
}

// Start the quiz
askRetry

console.log("hello! welkom bij de quiz");
var vraag1 = readlineSync.question('wat is mijn favorite dier? A,cat B,hond c,vis ')
console.log("je antwoord is " + vraag1 + " het goede antwoord is a")
var vraag2 = readlineSync.question('wat is mijn favorite game? A,guardian tales B,azur lane c, yu-gi-oh masterduel ')
console.log("je antwoord is " + vraag2 + " het goede antwoord is a")
var vraag3 = readlineSync.question('wat is mijn favorite eten? A,cake B,hamburger c,spice noodle ')
console.log("je antwoord is " + vraag3 + " het goede antwoord is c")
var vraag4 = readlineSync.question('wat is mijn favorite anime? A,fairy tail B,naruto c,one piece ')
console.log("je antwoord is " + vraag4 + " het goede antwoord is A")
var vraag5 = readlineSync.question('hoe oud ben ik? A,17 B,18 c,19 ')
console.log("je antwoord is " + vraag5 + " het goede antwoord is B")