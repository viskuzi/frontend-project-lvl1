import readlineSync from 'readline-sync';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const getAnswer = () => {
  const randomNumber = Math.floor(Math.random(2) * 100);
  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');
  return [randomNumber, answer];
};
const checkAnswer = (answer) => {
  let correctAnswer;
  if (answer[0] % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  const check = answer[1] === correctAnswer;
  return [check, correctAnswer];
};

export { rules, getAnswer, checkAnswer };
