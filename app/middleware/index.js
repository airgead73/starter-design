const handleError = require('./handleError');
const handleQuery = require('./handleQuery');
const handleDetail = require('./handleDetail');
const handleCloudinary = require('./handleCloudinary');
const { validationRules, validate }= require('./handleValidation');
const checkAuthClient = require('./handleAuth');

module.exports = {
  checkAuthClient,
  handleError,
  handleDetail,
  handleCloudinary,
  handleQuery,
  validationRules,
  validate
}