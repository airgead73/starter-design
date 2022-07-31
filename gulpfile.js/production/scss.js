const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssnano = require('cssnano');
const combinemq = require('postcss-combine-media-query');
const autoprefixer = require('autoprefixer');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');

function scss() {
  return (src('assets/scss/index.scss', { sourcemaps: true }))
    .pipe(sass())
    .pipe(postcss([autoprefixer(), combinemq(), cssnano()])) 
    .pipe(rename('main.min.css'))
    .pipe(dest('app/public', { sourcemaps: '.'}))
}

module.exports = scss;