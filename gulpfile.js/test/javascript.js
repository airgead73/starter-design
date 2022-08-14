// third-party imports
const { dest } = require('gulp');
const rollup = require('rollup-stream');
const sourcemaps = require('gulp-sourcemaps')
const rename = require('gulp-rename');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');

// constants
const { TEST_JS: C } = require('../constants');

// functions

function javascript() {
  return rollup({
    input: C.INPUT,
    sourcemap: true,
    format: 'iife'
  })
  .pipe(source(C.SOURCE_FILE, C.SOURCE_PATH))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(rename(C.OUTPUT))
  .pipe(sourcemaps.write('.'))
  .pipe(dest(C.DEST));  
}

module.exports = javascript;