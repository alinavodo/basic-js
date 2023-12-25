const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let month = date.getMonth();
  if (isValid(date)){
    if (month >= 3 && month <= 5) return Spring;
    else if (month >= 6 && month <= 8) return Summer;
    else if (month >= 9 && month <= 11) return Autumn;
    else return Winter;
} else {
  return false;
}

  } 


module.exports = {
  getSeason
};
