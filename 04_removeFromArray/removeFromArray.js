const removeFromArray = function (...arr) {
  let target = arr[0];
  let newArr = [];

  target.forEach((item) => {
    if (!arr.includes(item)) {
      newArr.push(item);
    }
  });
  //   for (let i = 0; i < arr.length; i++) {
  //     if ((arr[i] = num)) continue;
  //     newArr.push(arr[i]);
  //   }
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
