const handleError = require('./handleError');
const handleQuery = require('./handleQuery');
const { validationRules, validate }= require('./handleValidation');
const checkAuthClient = require('./handleAuth');

module.exports = {
  checkAuthClient,
  handleError,
  handleQuery,
  validationRules,
  validate
}