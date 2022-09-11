const asyncHandler = require('express-async-handler');
const { isDev, isTest } = require('../../config/env');

/**
 * @desc dashboard view
 * @route GET - /
 * @access Private
 * */

exports.home = asyncHandler(async (req, res, next) => {

  const partial = req.query.template !== undefined ? req.query.template : 'dashboard';

  const partialPath = `../partials/${partial}`;

  return res
    .status(200)
    .render('pages/home', {
      title: 'starter',
      development: isDev,
      test: isTest,
      partialPath
  });

});