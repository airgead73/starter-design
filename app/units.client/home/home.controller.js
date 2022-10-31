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

exports.authors = asyncHandler(async (req, res, next) => {  

  const { success, count, data: authors } = res.results;

  return res
    .status(200)
    .render('pages/home', {
      title: 'starter',
      development: isDev,
      test: isTest,
      partialPath: '../partials/tables',
      count,
      authors
  });

});

exports.photos = asyncHandler(async (req, res, next) => {  

  //const { success, count, data: photos } = res.results;

  return res
    .status(200)
    .render('pages/home', {
      title: 'starter',
      development: isDev,
      test: isTest,
      partialPath: '../partials/photos'
  });

});