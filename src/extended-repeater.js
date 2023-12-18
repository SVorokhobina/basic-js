const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let addition;
  let separator = options.separator || '+';
  let additionSeparator = options.additionSeparator || '|';
  
  function createString(str, num, separ) { //String, Number of repetitions, Separater
    if (str === undefined) {
      return '';
    } else if (str !== undefined && typeof str !== 'string') {
      str = String(str);
    } 
    
    if (num === undefined) { num = 1; }
    
    let arr = [];
    for (let i = 0; i < num; i++) {
      arr[i] = str;
    }
    return arr.join(separ);
  }
  
  addition = createString(options.addition, options.additionRepeatTimes, additionSeparator);
  return createString(str + addition, options.repeatTimes, separator);
}

module.exports = {
  repeater
};
