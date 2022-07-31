const { series, watch } = require('gulp');
const scss = require('./scss');
const clean = require('./clean');
const javascript = require('./javascript')

function watchTasks() {
  watch(['assets/scss/**/*.scss', 'assets/scripts/**/*.js'], { ignoreInitial: false, delay: 500 },
  series(
    clean,
    javascript,
    scss
  ));
}

module.exports = watchTasks;