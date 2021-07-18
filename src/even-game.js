import { print } from './cli.js';
import { getRandomInt } from './utils.js';
import { startGame } from './index.js';

const describeEvenGame = () => {
  print('Answer "yes" if the number is even, otherwise answer "no".');
};

const MAX_NUMBER = 100;

const isEven = (num) => num % 2 === 0;
const getAnswer = (num) => (isEven(num) ? 'yes' : 'no');

const genQuestion = () => {
  const num = getRandomInt(MAX_NUMBER + 1);
  const correctAnswer = getAnswer(num);

  return { question: num, correctAnswer };
};

const evenGame = () => {
  startGame(describeEvenGame, genQuestion);
};

export default evenGame;
