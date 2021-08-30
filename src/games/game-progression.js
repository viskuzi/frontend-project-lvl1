import readlineSync from 'readline-sync';

const rules = 'What number is missing in the progression?';

const getAnswer = () => {
  const generateProgression = () => {
    const arrLength = Math.floor(Math.random(1) * 5);
    const firstNumber = Math.floor(Math.random(1) * 100);
    const counter = Math.floor(Math.random(1) * 5) + 1;
    const result = [];
    let numberforpush = firstNumber;
    for (let i = arrLength; i < 10; i += 1) {
      numberforpush += counter;
      result.push(numberforpush);
    }
    return result;
  };

  let array = generateProgression();
  const arrayLength = array.length;
  const randomPlaceOfElement = Math.floor(Math.random(1) * arrayLength);
  const rightAnswer = array[randomPlaceOfElement];
  array[randomPlaceOfElement] = '..';
  array = array.join(' ');

  console.log(`Question: ${array}`);
  const answer = readlineSync.question('Your answer: ');
  return [answer, rightAnswer];
};

const checkAnswer = (answer) => {
  const correctAnswer = answer[1];
  const check = Number(answer[0]) === correctAnswer;
  return [check, correctAnswer];
};

export { rules, getAnswer, checkAnswer };
