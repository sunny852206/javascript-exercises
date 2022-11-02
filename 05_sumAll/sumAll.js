const sumAll = function (a, b) {
  if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b))
    return "ERROR";
  if (a > b) {
    let temp = a;
    a = b;
    b = temp;
  }

  let num = 0;
  for (let i = a; i <= b; i++) {
    num += i;
  }
  return num;
};

// Do not edit below this line
module.exports = sumAll;
