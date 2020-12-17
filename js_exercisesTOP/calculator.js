const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const div = (a, b) => a / b;

const power = (base, exp) => {
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
};
