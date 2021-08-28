import readlineSync from 'readline-sync';

const rules = 'Find the greatest common divisor of given numbers.';

const getAnswer = () => {
  const randomNumber1 = Math.ceil(Math.random(2) * 100);
  const randomNumber2 = Math.ceil(Math.random(2) * 100);
  console.log(`Question: ${randomNumber1} ${randomNumber2}`);
  const answer = readlineSync.question('Your answer: ');
  return [answer, randomNumber1, randomNumber2];
};

const checkAnswer = (answer) => {
  // eslint-disable-next-line consistent-return
  const gcd = () => {
    const firstNumber = answer[1];
    const secondNumber = answer[2];
    const min = Math.min(firstNumber, secondNumber);
    for (let i = min; i > 0; i -= 1) {
      if (firstNumber % i === 0 && secondNumber % i === 0) {
        return i;
      }
    }
  };
  const correctAnswer = gcd();
  const check = Number(answer[0]) === correctAnswer;
  return [check, correctAnswer];
};

export { rules, getAnswer, checkAnswer };
