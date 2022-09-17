const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');

// constants
const { DEVELOPMENT_ICONS: C } = require('../constants');

function icons() {
  return (src(C.SRC, { sourcemaps: true }))
    .pipe(sass())
    .pipe(rename(C.OUTPUT))
    .pipe(dest(C.DEST, { sourcemaps: '.' }))
}

module.exports = icons;