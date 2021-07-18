/* eslint-disable import/prefer-default-export */

export const getRandomInt = (max) => Math.floor(Math.random() * max);

export const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

export const getSeq = (start, length, step) => {
  const res = [];

  for (let i = 0; i < length; i += 1) {
    res.push(start + step * i);
  }

  return res;
};
