const asyncHandler = require('express-async-handler');
const { isDev, isTest } = require('../../config/env');
const { Author } = require('../../units.api/authors');
const { Book } = require('../../units.api/books');
const { Photo } = require('../../units.api/photos');

/**
 * @desc dashboard view
 * @route GET - /
 * @access Private
 * */

 exports.home = asyncHandler(async (req, res, next) => {

  const authors = await Author.find().populate({ path: 'books' });

  return res
    .status(200)
    .json({
      message: 'authors',
      data: authors
    })

  // return res
  //   .status(200)
  //   .render('pages/home', {
  //     title: 'starter',
  //     development: isDev,
  //     test: isTest,
  //     partialPath: '../partials/dashboard',
  //     authors
  // });

});

exports.authors = asyncHandler(async (req, res, next) => {

  const authors = await Author.find().populate({ path: 'books', options: { sort: { 'title': 1 }}}).sort('lname');

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
  const books = await Book.find().populate('author');

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

exports.photos = asyncHandler(async (req, res, next) => {

  const photos = await Photo.find().populate('book').sort({ 'book.title': 1 });
  const books = await Book.find().select('title');

  // return res
  //   .status(200)
  //   .json({
  //     message: 'photo list',
  //     data: photos
  //   });

  return res
    .status(200)
    .render('pages/home', {
      title: 'starter',
      development: isDev,
      test: isTest,
      partialPath: '../partials/photos/index',
      books,
      photos
  });

});