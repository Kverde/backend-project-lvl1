import { print } from '../cli.js';
import { getRandomInt, gcd } from '../utils.js';
import { startGame } from '../index.js';

const describeEvenGame = () => {
  print('Find the greatest common divisor of given numbers.');
};

const MAX_NUMBER = 100;

const genQuestion = () => {
  const a = getRandomInt(MAX_NUMBER + 1);
  const b = getRandomInt(MAX_NUMBER + 1);
  const correctAnswer = gcd(a, b);

  const question = `${a} ${b}`;

  return { question, correctAnswer };
};

const gcdGame = () => {
  startGame(describeEvenGame, genQuestion);
};

export default gcdGame;
