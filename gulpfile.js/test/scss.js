const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssnano = require('cssnano');
const combinemq = require('postcss-combine-media-query');
const autoprefixer = require('autoprefixer');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const purgecss = require('gulp-purgecss');

const { TEST_SCSS: C } = require('../constants');

function scss() {
  return (src(C.SRC, { sourcemaps: true }))
    .pipe(sass())
    .pipe(purgecss({ content: ['./app/views/pages/*.ejs', './app/views/partials/*.ejs']}))
    .pipe(postcss([autoprefixer(), combinemq()])) 
    .pipe(rename(C.OUTPUT))
    .pipe(dest(C.DEST, { sourcemaps: '.'}))
}

module.exports = scss;