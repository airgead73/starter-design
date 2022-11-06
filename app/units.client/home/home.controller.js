const asyncHandler = require('express-async-handler');
const { isDev, isTest } = require('../../config/env');
const { Author } = require('../../units.api/authors');
const { Book } = require('../../units.api/books');

/**
 * @desc dashboard view
 * @route GET - /
 * @access Private
 * */

 exports.home = asyncHandler(async (req, res, next) => {

  const authors = await Author.find().populate('books').sort('lname');

  return res
    .status(200)
    .render('pages/home', {
      title: 'starter',
      development: isDev,
      test: isTest,
      partialPath: '../partials/dashboard',
      authors
  });

});

exports.authors = asyncHandler(async (req, res, next) => {

  const authors = await Author.find().populate('books').sort('lname');

  return res
    .status(200)
    .render('pages/home', {
      title: 'starter',
      development: isDev,
      test: isTest,
      partialPath: '../partials/authors/index',
      count: authors.length,
      authors
  });

});

exports.books = asyncHandler(async (req, res, next) => {

  const authors = await Author.find().populate('books').sort('lname');
  const books = await Book.find().populate({ path: 'author', options: { sort: { 'lname': 1 }} });

  return res
    .status(200)
    .render('pages/home', {
      title: 'starter',
      development: isDev,
      test: isTest,
      partialPath: '../partials/books/index',
      authors,
      books
  });

});