import readlineSync from 'readline-sync';

const getRandomString = (firstRandomNumber, secondRandomNumber, operator) => {
  if (operator === 0) {
    return `${firstRandomNumber} + ${secondRandomNumber}`;
  }
  if (operator === 1) {
    return `${firstRandomNumber} - ${secondRandomNumber}`;
  }
  return `${firstRandomNumber} * ${secondRandomNumber}`;
};

const countRandomValue = (firstRandomNumber, secondRandomNumber, operator) => {
  if (operator === 0) {
    return firstRandomNumber + secondRandomNumber;
  }
  if (operator === 1) {
    return firstRandomNumber - secondRandomNumber;
  }
  return firstRandomNumber * secondRandomNumber;
};

const isAnswerRight = (name) => {
  const firstRandomNumber = Math.floor(Math.random() * 100);
  const secondRandomNumber = Math.floor(Math.random() * 100);
  const operator = (Math.floor(Math.random(1) * 10000)) % 3; // 0, 1 , 2;
  
  const correctAnswer = countRandomValue(firstRandomNumber, secondRandomNumber, operator);
  const question = getRandomString(firstRandomNumber, secondRandomNumber, operator);

  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const answer = Number(userAnswer);

  if (correctAnswer === answer) {
    console.log('Correct!');
    return true;
  } console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${name}`);
  return false;
};

const countRandomExpression = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);
  console.log('What is the result of expression?');
  
  let previousGuessCorrect = true;
  let gameNumber = 0;

  while (gameNumber < 3 && previousGuessCorrect === true) {
    previousGuessCorrect = isAnswerRight(userName);
    gameNumber += 1;
  }
  if (previousGuessCorrect === true && gameNumber === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
