const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssnano = require('cssnano');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');

function icons() {
  return (src('assets/icons/index.scss', { sourcemaps: true }))
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(rename('icons.min.css'))
    .pipe(dest('app/public', { sourcemaps: '.'}))
}

module.exports = icons;