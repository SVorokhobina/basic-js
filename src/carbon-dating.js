const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || sampleActivity === undefined) {
    return false;
  } 
  
  if (Number.isFinite(Number(sampleActivity)) !== true ||
    Number(sampleActivity) <= 0 ||
    Number(sampleActivity) > 15) {
    return false;
  } else {
    sampleActivity = Number(sampleActivity);
  }

  return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) * HALF_LIFE_PERIOD / 0.693);
}

module.exports = {
  dateSample
};
