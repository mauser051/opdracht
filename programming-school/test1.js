const readlineSync = require('readline-sync');

function askQuestion(question, correctAnswer) {
  const userAnswer = readlineSync.question(question).toLowerCase();

  if (userAnswer === correctAnswer) {
    return true; // Return true for correct answers
  } else {
    return false; // Return false for incorrect answers
  }
}

function runQuiz(correctAnswers) {
  console.log("Hello! Welkom bij de quiz");

  // Ask your questions and check answers
  if (askQuestion('Wat is mijn favoriete dier? A, B, C ', 'A')) {
    correctAnswers++;
  }
  if (askQuestion('Wat is mijn favoriete eten? A, B, C ', 'C')) {
    correctAnswers++;
  }
  if (askQuestion('Wat is mijn favoriete game? A, B, C ', 'A')) {
    correctAnswers++;
  }
  if (askQuestion('Hoe oud ben ik? A, B, C ', 'B')) {
    correctAnswers++;
  }

  console.log(`Je hebt ${correctAnswers} van de 4 vragen correct beantwoord.`);

  // Ask the user if they want to restart the quiz
  const restart = readlineSync.keyInYN('Wil je de quiz opnieuw spelen?: ');

  if (restart) {
    // If the user wants to restart, call runQuiz again with the updated correctAnswers
    return runQuiz(correctAnswers);
  } else {
    console.log('Bedankt voor het spelen van de quiz!');
    return correctAnswers; // Return the final score
  }
}

// Start the quiz and store the final score
const finalScore = runQuiz(0);

console.log(`Eindstand: Je hebt in totaal ${finalScore} van de 4 vragen correct beantwoord.`);