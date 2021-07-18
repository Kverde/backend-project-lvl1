import { print } from '../cli.js';
import { getRandomInt } from '../utils.js';
import { startGame } from '../index.js';

const describeEvenGame = () => {
  print('What is the result of the expression?');
};

const MAX_NUMBER = 100;

const genQuestion = () => {
  const a = getRandomInt(MAX_NUMBER + 1);
  const b = getRandomInt(MAX_NUMBER + 1);
  let operator;
  let correctAnswer;

  switch (getRandomInt(3)) {
    case 0:
      operator = '+';
      correctAnswer = a + b;
      break;
    case 1:
      operator = '-';
      correctAnswer = a - b;
      break;
    case 2:
      operator = '*';
      correctAnswer = a * b;
      break;
    default:
      throw new Error('Wrong operatior');
  }

  const question = `${a} ${operator} ${b}`;

  return { question, correctAnswer };
};

const calcGame = () => {
  startGame(describeEvenGame, genQuestion);
};

export default calcGame;
