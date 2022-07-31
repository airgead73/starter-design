const asyncHandler = require('express-async-handler');
const { isDev } = require('../../config/env');

/**
 * @desc template dashboard view
 * @route GET - /templates
 * @access Private
 * */

exports.dashboard = asyncHandler(async (req, res, next) => {

  return res
    .status(200)
    .render('pages/templates/dashboard', {
      title: 'templates',
      development: isDev
    });
});