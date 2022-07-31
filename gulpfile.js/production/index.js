const { series } = require('gulp');
const scss = require('./scss');
const clean = require('./clean');
const javascript = require('./javascript')

exports.build = series(clean, scss, javascript)