const asyncHandler = require('express-async-handler');
const { isDev } = require('../../config/env');

/**
 * @desc book dashboard view
 * @route GET - /books
 * @access Private
 * */

exports.dashboard = asyncHandler(async (req, res, next) => {
  return res
    .status(200)
    .render('pages/books/dashboard', {
      title: 'books',
      development: isDev
    });
});

/**
 * @desc book add view
 * @route GET - /books/add
 * @access Private
 * */

 exports.add = asyncHandler(async (req, res, next) => {
  return res
    .status(200)
    .render('pages/books/add', {
      title: 'add book',
      development: isDev
    });
});

/**
 * @desc book detail view
 * @route GET - /books/:id
 * @access Private
 * */

 exports.detail = asyncHandler(async (req, res, next) => {
  return res
    .status(200)
    .render('pages/books/detail', {
      title: 'book detail',
      development: isDev
    });
});

/**
 * @desc book update view
 * @route GET - /books/:id/update
 * @access Private
 * */

 exports.update = asyncHandler(async (req, res, next) => {
  return res
    .status(200)
    .render('pages/books/update', {
      title: 'books',
      development: isDev
    });
});
