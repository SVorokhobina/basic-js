const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (Array.isArray(arr) !== true) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let copyArr = arr.slice();
  let resultArr = [];
  let regExp = /delElem$/;
  for (let i = 0; i < copyArr.length; i++) {
    if (copyArr[i] === '--discard-next') {
      copyArr[i + 1] = copyArr[i + 1] + 'delElem';
      i += 1;
    } 
    
    else if (copyArr[i] === '--discard-prev') {
      if (copyArr[i - 1] === undefined || regExp.test(copyArr[i - 1]) === true) {
        continue;
      } else {
        resultArr.pop();
      }
    } 
    
    else if (copyArr[i] === '--double-next') {
      if (copyArr[i + 1] !== undefined) {
        resultArr.push(copyArr[i + 1]);
      }
    } 
    
    else if (copyArr[i] === '--double-prev') {
      if (copyArr[i - 1] === undefined || regExp.test(copyArr[i - 1]) === true) {
        continue;
      } else {
        resultArr.push(resultArr[resultArr.length - 1]);
      } 
    } 
    
    else {
      resultArr.push(arr[i]);
    }
  }
  return resultArr;
}

module.exports = {
  transform
};
