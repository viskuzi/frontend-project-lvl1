import readlineSync from 'readline-sync';

const engine = (rules, getAnswer, checkAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);

  console.log(rules);
  let gameNumber = 0;

  while (gameNumber < 3) {
    const answer = getAnswer();

    const result = checkAnswer(answer);
    const userAnswer = result[0];
    const correctAnswer = result[1];

    if (userAnswer && gameNumber < 3) {
      console.log('Correct!');
    } else {
      console.log(`'${answer[4]}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
      return;
    }
    gameNumber += 1;

    if (userAnswer && gameNumber === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default engine;
