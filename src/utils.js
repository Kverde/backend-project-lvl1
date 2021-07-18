/* eslint-disable import/prefer-default-export */

export const getRandomInt = (max) => Math.floor(Math.random() * max);

export const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};
