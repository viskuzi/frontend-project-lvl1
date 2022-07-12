import readlineSync from 'readline-sync';

const engine = (rules, getAnswer, checkAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);

  let gameNumber = 0;
  while (gameNumber < 3) {
    const answer = getAnswer(); // array in result
    const resultsOfCounting = checkAnswer(answer);

    const isUserAnswerCorrect = resultsOfCounting[0];
    const correctAnswer = resultsOfCounting[1];

    if (isUserAnswerCorrect && gameNumber < 3) {
      console.log('Correct!');
    } else {
      console.log(`'${answer[0]}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
      return;
    }
    gameNumber += 1;

    if (isUserAnswerCorrect && gameNumber === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default engine;
