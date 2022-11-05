const isMongooseID = require('./checkID/isMongooseID');
const idExists = require('./checkID/idExists');
const handleError = require('./handleError');
const handleQuery = require('./handleQuery');
const handleCloudinary = require('./handleCloudinary');
const { validationRules, validate }= require('./handleValidation');
const checkAuthClient = require('./handleAuth');

module.exports = {
  idExists,
  isMongooseID,
  checkAuthClient,
  handleError,
  handleCloudinary,
  handleQuery,
  validationRules,
  validate
}