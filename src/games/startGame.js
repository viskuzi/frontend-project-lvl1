import readlineSync from 'readline-sync';

const isNumberEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let gameNumber = 0;
  let previousGuessCorrect = true;

  while (gameNumber < 3 && previousGuessCorrect === true) {
    const randomNumber = Math.floor(Math.random(2) * 100);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');

    let correctAnswer;
    if (randomNumber % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }

    if (correctAnswer === 'yes' && answer === 'yes') {
      previousGuessCorrect = true;
    } else if (correctAnswer === 'yes' && answer === 'no') {
      previousGuessCorrect = false;
    } else if (correctAnswer === 'no' && answer === 'no') {
      previousGuessCorrect = true;
    } else if (correctAnswer === 'no' && answer === 'yes') {
      previousGuessCorrect = false;
    } else {
      previousGuessCorrect = false;
    }

    if (previousGuessCorrect === true && gameNumber < 3) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
    }
    gameNumber += 1;
  }

  // eslint-disable-next-line no-cond-assign
  if (previousGuessCorrect = true && gameNumber === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default isNumberEven;
