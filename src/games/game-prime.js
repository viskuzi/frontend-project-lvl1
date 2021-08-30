import readlineSync from 'readline-sync';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getAnswer = () => {
  const randomNumber = Math.floor(Math.random(2) * 100);
  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');
  return [answer, randomNumber];
};

const checkAnswer = (answer) => {
  const isPrime = (num) => {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= num / 2; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  };
  const primeOrNot = isPrime(answer[1]);
  let correctAnswer;
  if (primeOrNot === true) {
    correctAnswer = 'yes';
  } else correctAnswer = 'no';
  const check = answer[0] === correctAnswer;
  return [check, correctAnswer];
};

export { rules, getAnswer, checkAnswer };
