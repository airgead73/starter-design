const DEVELOPMENT_JS = {
  INPUT: './assets/scripts/main.js',
  SOURCE_FILE: 'main.js',
  SOURCE_PATH: './assets/scripts',
  OUTPUT: 'bundle.js',
  DEST: './app/public'
};
const DEVELOPMENT_SCSS = {
  SRC: 'assets/scss/index.scss',
  OUTPUT: 'main.css',
  DEST: 'app/public'
};
const DEVELOPMENT_WATCH = {};

module.exports = {
  DEVELOPMENT_JS,
  DEVELOPMENT_SCSS,
  DEVELOPMENT_WATCH
}