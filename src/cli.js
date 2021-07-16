import readlineSync from 'readline-sync';

export const print = (msg) => {
  console.log(msg);
};

export const read = (msg) => {
  const userAnswer = readlineSync.question(msg);
  return userAnswer;
};

export const greeting = () => {
  print('Welcome to the Brain Games!');
  const userName = read('May I have your name? ');
  print(`Hello, ${userName}`);

  return userName;
};
