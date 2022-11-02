const asyncHandler = require('express-async-handler');
const { isDev, isTest } = require('../../config/env');

/**
 * @desc dashboard view
 * @route GET - /
 * @access Private
 * */

exports.home = asyncHandler(async (req, res, next) => {

  return res
    .status(200)
    .render('pages/home', {
      title: 'starter',
      development: isDev,
      test: isTest,
      partialPath: '../partials/dashboard',
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
      partialPath: '../partials/authors',
      success,
      count,
      authors

  });

});

exports.photos = asyncHandler(async (req, res, next) => {  

  return res
    .status(200)
    .render('pages/home', {
      title: 'starter',
      development: isDev,
      test: isTest,
      partialPath: '../partials/photos'
  });

});

exports.books = asyncHandler(async (req, res, next) => {  

  return res
    .status(200)
    .render('pages/home', {
      title: 'starter',
      development: isDev,
      test: isTest,
      partialPath: '../partials/books'
  });

});