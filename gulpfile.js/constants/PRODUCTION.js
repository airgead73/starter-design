const PRODUCTION_JS = {
  INPUT: './assets/scripts/main.js',
  SOURCE_FILE: 'main.js',
  SOURCE_PATH: './assets/scripts',
  OUTPUT: 'bundle.min.js',
  DEST: './app/public'
};

const PRODUCTION_SCSS = {
  SRC: 'assets/scss/index.scss',
  CONTENT: ['./app/views/**/*.ejs'],
  OUTPUT: 'main.min.css',
  DEST: 'app/public'
};

const PRODUCTION_ICONS = {
  SRC: 'assets/icons/index.scss',
  OUTPUT: 'icons.min.css',
  MAP: 'icon.min.css.map',
  DEST: 'app/public'
};

module.exports = {
  PRODUCTION_JS,
  PRODUCTION_SCSS,
  PRODUCTION_ICONS
}

