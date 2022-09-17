const { series } = require('gulp');
const scss = require('./scss');
const icons = require('./icons');
const { clean } = require('../clean');
const javascript = require('./javascript')

exports.test = series(clean, scss, icons, javascript)