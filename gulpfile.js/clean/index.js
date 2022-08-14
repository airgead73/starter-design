const clean = require('./clean');
const { 
  CONSTANTS_CLEAN,
  CONSTANTS_PRODUCTION
 } = require('./constants');

//exports.clean = clean;
module.exports = {
  clean,
  CONSTANTS_CLEAN,
  CONSTANTS_PRODUCTION
}
