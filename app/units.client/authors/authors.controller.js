const asyncHandler = require('express-async-handler');
const Author = require('../../units.api/authors/author');
const { isDev } = require('../../config/env');

/**
 * @desc author dashboard view
 * @route GET - /authors
 * @access Private
 * */

exports.dashboard = asyncHandler(async (req, res, next) => {

  const { success, count, data: authors } = res.results;

  return res
    .status(200)
    .render('pages/authors/dashboard', {
      title: 'authors',
      success,
      count,
      authors,
      development: isDev
    });
});

/**
 * @desc author add view
 * @route GET - /authors/add
 * @access Private
 * */

 exports.add = asyncHandler(async (req, res, next) => {
  return res
    .status(200)
    .render('pages/authors/add', {
      title: 'add author',
      development: isDev
    });
});

/**
 * @desc author detail view
 * @route GET - /authors/:id
 * @access Private
 * */

 exports.detail = asyncHandler(async (req, res, next) => {
  return res
    .status(200)
    .render('pages/authors/detail', {
      title: 'author detail',
      development: isDev
    });
});

/**
 * @desc author update view
 * @route GET - /authors/:id/update
 * @access Private
 * */

 exports.update = asyncHandler(async (req, res, next) => {
  return res
    .status(200)
    .render('pages/authors/update', {
      title: 'authors',
      development: isDev
    });
});
