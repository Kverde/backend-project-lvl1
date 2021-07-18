import { read, print } from './cli.js';

const WIN_COUNT = 3;

export const greeting = () => {
  print('Welcome to the Brain Games!');
  const userName = read('May I have your name? ');
  print(`Hello, ${userName}`);

  return userName;
};

export const sayQuestion = (questionText) => {
  print(`Question: ${questionText}`);
};

export const askQuestion = () => {
  const answer = read('Your answer: ');
  return answer;
};

export const failGame = (userName, answer, corretAnswer) => {
  print(`'${answer}' is wrong answer ;(. Correct answer was '${corretAnswer}'.`);
  print(`Let's try again, ${userName}!`);
};

export const startGame = (describeGame, genQuestion) => {
  const userName = greeting();
  describeGame();

  let winCount = 0;

  while (winCount < WIN_COUNT) {
    const { question, correctAnswer } = genQuestion();
    sayQuestion(question);

    const userAnswer = askQuestion();

    if (userAnswer === String(correctAnswer)) {
      winCount += 1;
      print('Correct!');
    } else {
      failGame(userName, userAnswer, correctAnswer);
      return;
    }
  }

  print(`Congratulations, ${userName}!`);
};
