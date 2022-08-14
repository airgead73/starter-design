const { series } = require('gulp');
const scss = require('./scss');
const { clean } = require('../clean');
const javascript = require('./javascript')

exports.test = series(clean, scss, javascript)