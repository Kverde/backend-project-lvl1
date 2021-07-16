import { greeting, read, print } from './cli.js';
import { getRandomInt } from './utils.js';

const MAX_NUMBER = 100;

const sayQuestion = () => {
  const randomNumber = getRandomInt(MAX_NUMBER + 1);
  print(`Question: ${randomNumber}`);
  return randomNumber;
};

const askQuestion = () => {
  const answer = read('Your answer: ');
  return answer;
};

const getCorrectAnswer = (num) => (num % 2 === 0 ? 'yes' : 'no');

const failGame = (userName, answer, corretAnswer) => {
  print(`'${answer}' is wrong answer ;(. Correct answer was '${corretAnswer}'.`);
  print(`Let's try again, ${userName}!`);
};

const evenGame = () => {
  const userName = greeting();
  print('Answer "yes" if the number is even, otherwise answer "no".');

  let winCount = 0;

  while (winCount < 3) {
    const num = sayQuestion();
    const answer = askQuestion();
    const correctAnswer = getCorrectAnswer(num);

    if (answer === correctAnswer) {
      winCount += 1;
      print('Correct!');
    } else {
      failGame(userName, answer, correctAnswer);
      return;
    }
  }

  print(`Congratulations, ${userName}!`);
};

export default evenGame;
