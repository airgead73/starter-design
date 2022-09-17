const DEVELOPMENT_JS = {
  INPUT: './assets/scripts/main.js',
  SOURCE_FILE: 'main.js',
  SOURCE_PATH: './assets/scripts',
  OUTPUT: 'bundle.js',
  MAP: 'bundle.js.map',
  DEST: './app/public'
};
const DEVELOPMENT_SCSS = {
  SRC: 'assets/scss/index.scss',
  OUTPUT: 'main.css',
  MAP: 'main.css.map',
  DEST: 'app/public'
};
const DEVELOPMENT_ICONS = {
  SRC: 'assets/icons/index.scss',
  OUTPUT: 'icons.css',
  MAP: 'icon.css.map',
  DEST: 'app/public'
};
const DEVELOPMENT_WATCH = {
  ARRAY: ['assets/scss/index.scss','assets/scss/**/*.scss', 'assets/icons/index.scss', 'assets/icons/**/*.scss', 'assets/scripts/**/*.js']
};

module.exports = {
  DEVELOPMENT_JS,
  DEVELOPMENT_SCSS,
  DEVELOPMENT_ICONS,
  DEVELOPMENT_WATCH
}