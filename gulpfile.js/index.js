const { dev } = require('./development');
const { build } = require('./production');
const { clean } = require('./clean');
const { test } = require('./test');

exports.dev = dev;
exports.clean = clean;
exports.test = test;
exports.default = build;