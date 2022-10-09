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

  const { success, message, data: author } = res.results;

  return res
    .status(200)
    .json({
      success,
      message,
      author
    });

});

/**
 * @desc Update author
 * @route PATCH - /api/authors/:id
 * @access Private
 * */

 exports.update = asyncHandler(async (req, res, next) => {

  const { success, message, data: author } = res.results;

  let updatedAuthor;

  if(success) {
    updatedAuthor = await Author.findByIdAndUpdate(author.id, req.body, { new: true });
  }

  return res
    .status(200)
    .json({
      success,
      message,
      author: updatedAuthor || null
    });

});

/**
 * @desc Delete author
 * @route DELETE - /api/authors/:id
 * @access Private
 * */

 exports.remove = asyncHandler(async (req, res, next) => {

  const { success, message, data: author } = res.results;
  let successMessage = null;

  if(success) {
    successMessage = `Author has been removed: ${author.lname}, ${author.fname}.`
    author.remove();
  }

  return res
    .status(200)
    .json({
      success,
      message: successMessage || message,
      author
    });

});