const asyncHandler = require('express-async-handler');
const { isDev } = require('../../config/env');

/**
 * @desc dashboard view
 * @route GET - /
 * @access Private
 * */

exports.home = asyncHandler(async (req, res, next) => {

  return res
    .status(200)
    .render('pages/dashboard', {
      title: 'starter',
      development: isDev
  });

});