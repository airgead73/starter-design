const asyncHandler = require('express-async-handler');
const { isDev, isTest } = require('../../config/env');
const { Author } = require('../../units.api/authors');

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