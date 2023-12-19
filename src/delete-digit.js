const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const counter = String(n).split('').length;
  let arr = [];
  let currentNum = 0;
  let largestNum = 0;

  for (let i = 0; i < counter; i++) {
    arr = String(n).split('');
    arr.splice(i, 1);
    currentNum = Number(arr.join(''));
    if (currentNum > largestNum) {
      largestNum = currentNum;
    }
  }
  return largestNum;
}

module.exports = {
  deleteDigit
};
