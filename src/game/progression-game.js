import { print } from '../cli.js';
import { startGame } from '../index.js';
import { getRandomInt, getSeq } from '../utils.js';

const describeEvenGame = () => {
  print('What number is missing in the progression?');
};

const MAX_START_NUMBER = 50;
const MAX_STEP = 20;
const SEQ_LENGTH = 8;

const genQuestion = () => {
  const startNumber = getRandomInt(MAX_START_NUMBER + 1);
  const step = getRandomInt(MAX_STEP + 1);

  const missIndex = getRandomInt(SEQ_LENGTH);

  const seq = getSeq(startNumber, SEQ_LENGTH, step);
  const correctAnswer = seq[missIndex];
  seq[missIndex] = '..';

  const question = seq.join(' ');

  return { question, correctAnswer };
};

const gcdGame = () => {
  startGame(describeEvenGame, genQuestion);
};

export default gcdGame;
