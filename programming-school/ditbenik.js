var readlineSync = require('readline-sync');

function askRetry() {
  const retry = readlineSync.keyInYN('Wil je de quiz opnieuw proberen? (ja/nee): ');
  return retry;
}

function runQuiz() {
  console.log("Hello! Welkom bij de quiz, due bug use lowercase letters");

  // Define the questions and correct answers
  const questions = [
    { question: 'Wat is mijn favoriete dier? A,cat B,hond C,vis ', correctAnswer: 'a' },
    { question: 'Wat is mijn favoriete game? A,guardian tales B,cyberpunk 2077 C, yugioh master duel ', correctAnswer: 'a' },
    { question: 'Wat is mijn favoriete eten? A,hamburger B,pasta C,spicy noodle ', correctAnswer: 'c' },
    { question: 'Wat is mijn favoriete anime? A,overlord B,fairy tail C, one piece ', correctAnswer: 'b' },
    { question: 'Hoe oud ben ik? A,17 B,18 C,19 ', correctAnswer: 'b' }
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
runQuiz();