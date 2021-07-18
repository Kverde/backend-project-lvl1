import readlineSync from 'readline-sync';

export const print = (msg) => {
  console.log(msg);
};

export const read = (msg) => {
  const userAnswer = readlineSync.question(msg);
  return userAnswer;
};
