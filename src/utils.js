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

export const isPrime = (n) => {
  if (n < 2) {
    return false;
  }

  for (let i = 3; i <= n / 2; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

export const isEven = (num) => num % 2 === 0;

export const boolToYesNo = (bool) => (bool ? 'yes' : 'no');
