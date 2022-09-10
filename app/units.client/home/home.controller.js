const asyncHandler = require('express-async-handler');
const { isDev, isTest } = require('../../config/env');

/**
 * @desc dashboard view
 * @route GET - /
 * @access Private
 * */

exports.home = asyncHandler(async (req, res, next) => {

  console.log(req.query.template);

  const view = req.query.template !== undefined ? req.query.template : 'dashboard';

  const viewPath = `pages/${view}`;

  return res
    .status(200)
    .render(viewPath, {
      title: 'starter',
      development: isDev,
      test: isTest
  });

});