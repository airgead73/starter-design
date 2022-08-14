const del = require('del');
const { CLEAN: filenames } = require('../constants');

function clean() {
  return del(filenames)
}

module.exports = clean;