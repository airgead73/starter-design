const { dev } = require('./development');
const { build } = require('./production');
const { clean } = require('./clean');

exports.dev = dev;
exports.clean = clean;
exports.default = build;