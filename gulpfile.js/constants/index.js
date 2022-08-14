const CLEAN = require('./CLEAN');
const { 
  PRODUCTION_JS, 
  PRODUCTION_SCSS,
} = require('./PRODUCTION');

const { 
  DEVELOPMENT_JS,
  DEVELOPMENT_SCSS,
  DEVELOPMENT_WATCH
} = require('./DEVELOPMENT');

module.exports = {
  CLEAN,
  DEVELOPMENT_JS,
  DEVELOPMENT_SCSS,
  DEVELOPMENT_WATCH,
  PRODUCTION_JS,
  PRODUCTION_SCSS
}