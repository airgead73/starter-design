const handleError = require('./handleError');
const handleQuery = require('./handleQuery');
const handleCloudinary = require('./handleCloudinary');
const { validationRules, validate }= require('./handleValidation');
const checkAuthClient = require('./handleAuth');

module.exports = {
  checkAuthClient,
  handleError,
  handleCloudinary,
  handleQuery,
  validationRules,
  validate
}