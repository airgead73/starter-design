const { series, watch } = require('gulp');
const scss = require('./scss');
const { clean } = require('../clean');
const javascript = require('./javascript');

// constants
const { DEVELOPMENT_WATCH: C } = require('../constants');

// function
function watchTasks() {
  watch(C.ARRAY, { ignoreInitial: false, delay: 500 },
  series(
    clean,
    javascript,
    scss
  ));
}

module.exports = watchTasks;