const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');

// constants
const { DEVELOPMENT_SCSS: C } = require('../constants');

function scss() {
  return (src(C.SRC, { sourcemaps: true }))
    .pipe(sass())
    .pipe(postcss([autoprefixer])) 
    .pipe(rename(C.OUTPUT))
    .pipe(dest(C.DEST, { sourcemaps: '.'}))
}

module.exports = scss;