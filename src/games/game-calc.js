import readlineSync from 'readline-sync';

const rules = 'What is the result of the expression?';

const getAnswer = () => {
  const a = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);
  const randomNumber = Math.floor(Math.random() * 10000);
  const i = randomNumber % 3;
  const getRandomString = () => {
    if (i === 0) {
      return `${a} + ${b}`;
    }
    if (i === 1) {
      return `${a} - ${b}`;
    }
    return `${a} * ${b}`;
  };
  const question = getRandomString();
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  return [answer, a, b, i];
};

const checkAnswer = (inputArray) => {
  const countRandomString = () => {
    if (inputArray[3] === 0) {
      return inputArray[1] + inputArray[2];
    } if (inputArray[3] === 1) {
      return inputArray[1] - inputArray[2];
    }
    return inputArray[1] * inputArray[2];
  };
  const correctAnswer = countRandomString();
  const isCorrect = Number(inputArray[0]) === correctAnswer;
  return [isCorrect, correctAnswer];
};
export { rules, getAnswer, checkAnswer };
