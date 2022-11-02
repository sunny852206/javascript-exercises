const palindromes = function (pstring) {
  let string = pstring.toLowerCase().replace(/[^a-z]/g, "");

  let start = 0,
    end = string.length - 1;
  while (start < end) {
    if (string[start] != string[end]) return false;
    start++;
    end--;
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
