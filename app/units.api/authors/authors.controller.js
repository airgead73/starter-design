const asyncHandler = require('express-async-handler');
const Author = require('./author');

/**
 * @desc Create author
 * @route POST - /api/authors
 * @access Private
 * */

exports.create = asyncHandler(async (req, res, next) => {

  const { success, errors } = res.val_results;

  if(success) {
    const author = new Author(req.body);
    await author.save();

    return res
    .status(200)
    .json({
      success: true,
      message: `Author created: ${author.fname} ${author.lname}.`,
      author
    });

  } else {

    return res
    .status(400)
    .json({
      success: false,
      message: 'Something went wrong.',
      errors
    });
  }

});

/**
 * @desc Read authors
 * @route GET - /api/authors
 * @access Private
 * */

 exports.read = asyncHandler(async (req, res, next) => {

  const { success, count, data: authors } = res.results;

  return res
    .status(200)
    .json({
      success,
      count,
      authors
    });

});

/**
 * @desc Read author detail
 * @route GET - /api/authors/:id
 * @access Private
 * */

 exports.detail = asyncHandler(async (req, res, next) => {

  return res
    .status(200)
    .json({
      success: true,
      message: 'GET author detail'
    });

});

/**
 * @desc Update author
 * @route PUT - /api/authors/:id
 * @access Private
 * */

 exports.update = asyncHandler(async (req, res, next) => {

  return res
    .status(200)
    .json({
      success: true,
      message: 'PUT author'
    });

});

/**
 * @desc Delete author
 * @route DELETE - /api/authors/:id
 * @access Private
 * */

 exports.remove = asyncHandler(async (req, res, next) => {

  return res
    .status(200)
    .json({
      success: true,
      message: 'DELETE author'
    });

});