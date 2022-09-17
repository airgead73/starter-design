const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssnano = require('cssnano');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');

// constants
const { PRODUCTION_ICONS: C } = require('../constants');

function icons() {
  return (src(C.SRC, { sourcemaps: true }))
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(rename(C.OUTPUT))
    .pipe(dest(C.DEST, { sourcemaps: '.'}))
}

module.exports = icons;