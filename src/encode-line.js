const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('');
  let resultArr = [];
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      counter ++;
    } else if (arr[i] !== arr[i + 1]) {
      counter ++;
      resultArr.push(`${counter == 1 ? '' : counter}` + `${arr[i]}`);
      counter = 0;
    }
  }
  return resultArr.join('');
}

module.exports = {
  encodeLine
};
