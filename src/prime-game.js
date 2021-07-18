import { print } from './cli.js';
import { getRandomInt, isPrime, boolToYesNo } from './utils.js';
import { startGame } from './index.js';

const describeEvenGame = () => {
  print('Answer "yes" if given number is prime. Otherwise answer "no".');
};

const MAX_NUMBER = 100;

const genQuestion = () => {
  const num = getRandomInt(MAX_NUMBER + 1);

  const question = num;
  const correctAnswer = boolToYesNo(isPrime(num));

  return { question, correctAnswer };
};

const gcdGame = () => {
  startGame(describeEvenGame, genQuestion);
};

export default gcdGame;
