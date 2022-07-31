const { dest } = require('gulp');
const rollup = require('rollup-stream');
const sourcemaps = require('gulp-sourcemaps')
const rename = require('gulp-rename');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');

function javascript() {
  return rollup({
    input: './assets/scripts/main.js',
    sourcemap: true,
    format: 'iife'
  })
  .pipe(source('main.js', './assets/scripts'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(rename('bundle.min.js'))
  .pipe(sourcemaps.write('.'))
  .pipe(dest('./app/public'));  
}

module.exports = javascript;