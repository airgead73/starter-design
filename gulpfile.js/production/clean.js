const del = require('del');

function clean() {
  return del([
    'app/public/main.css', 
    'app/public/main.css.map',
    'app/public/main.min.css',
    'app/public/main.min.css.map',
    'app/public/bundle.js',
    'app/public/bundle.js.map',
    'app/public/bundle.min.js',
    'app/public/bundle.min.js.map'    
  ])
}

module.exports = clean;