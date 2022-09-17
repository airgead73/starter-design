const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const combinemq = require('postcss-combine-media-query');
const autoprefixer = require('autoprefixer');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const purgecss = require('gulp-purgecss');

const { TEST_SCSS: C } = require('../constants');

function scss() {
  return (src(C.SRC, { sourcemaps: true }))
    .pipe(sass())
    .pipe(postcss([autoprefixer(), combinemq()])) 
    .pipe(purgecss({ content: C.CONTENT, safelist: ['open']}))
    .pipe(rename(C.OUTPUT))
    .pipe(dest(C.DEST, { sourcemaps: '.'}))
}

module.exports = scss;