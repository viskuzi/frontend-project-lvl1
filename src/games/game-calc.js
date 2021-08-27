import readlineSync from 'readline-sync';

const rules = 'What is the result of the expression?';

const getAnswer = () => {
  const a = Math.floor(Math.random(2) * 100);
  const b = Math.floor(Math.random(2) * 100);
  const randomNumber = Math.floor(Math.random(1) * 10000);
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
  const hui = getRandomString();
  console.log(`Question: ${hui}`);
  const answer = readlineSync.question('Your answer: ');
  return [a, b, i, hui, answer];
};
const checkAnswer = (answer) => {
  const countRandomString = () => {
    if (answer[2] === 0) {
      return answer[0] + answer[1];
    } if (answer[2] === 1) {
      return answer[0] - answer[1];
    }
    return answer[0] * answer[1];
  };
  const correctAnswer = countRandomString();
  const check = Number(answer[4]) === correctAnswer;
  return [check, correctAnswer];
};
export { rules, getAnswer, checkAnswer };
