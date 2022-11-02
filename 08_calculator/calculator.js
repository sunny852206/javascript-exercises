const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  let sum = 0;
  arr.forEach((num) => {
    sum += num;
  });

  return sum;
};

const multiply = function (arr) {
  let sum = 1;
  arr.forEach((num) => {
    sum *= num;
  });

  return sum;
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (n) {
  if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
