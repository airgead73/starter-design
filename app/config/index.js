const { authConfig } = require('./config.auth');
const { cloudinary } = require('./config.cloudinary');
const { connectDB } = require('./config.db');
const { limiter, sessionConfig } = require('./config.session');
const { policies: helmetPolicies } = require('./config.helmet');

module.exports = {
  authConfig,
  cloudinary,
  connectDB,
  helmetPolicies,
  limiter,
  sessionConfig  
}