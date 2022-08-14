const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssnano = require('cssnano');
const combinemq = require('postcss-combine-media-query');
const autoprefixer = require('autoprefixer');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');

const { TEST_SCSS: C } = require('../constants');

function scss() {
  return (src(C.SRC, { sourcemaps: true }))
    .pipe(sass())
    .pipe(postcss([autoprefixer(), combinemq(), cssnano()])) 
    .pipe(rename(C.OUTPUT))
    .pipe(dest(C.DEST, { sourcemaps: '.'}))
}

module.exports = scss;