const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');

function icons() {
  return (src('assets/icons/index.scss', { sourcemaps: true }))
    .pipe(sass())
    .pipe(rename('icons.css'))
    .pipe(dest('app/public', { sourcemaps: '.' }))
}

module.exports = icons;