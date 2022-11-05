const asyncHandler = require('express-async-handler');
const Author = require('./author');

/**
 * @desc Create author
 * @route POST - /api/authors
 * @access Private
 * */

exports.create = asyncHandler(async (req, res, next) => {

  const author = new Author(req.body);
  await author.save();

  const { dates_formatted } = author;
  
  const dob = dates_formatted.dob;

  return res
  .status(200)
  .json({
    success: true,
    message: `${author.fullname} as been created.`,
    dob,
    data: author
  });

});

/**
 * @desc Read authors
 * @route GET - /api/authors
 * @access Private
 * */

 exports.read = asyncHandler(async (req, res, next) => {

  const authors = await Author.find().populate('books');

  return res
  .status(200)
  .json({
    success: true,
    message: 'Read multiple authors.',
    count: authors.length,
    data: authors
  });

});

/**
 * @desc Read single author
 * @route GET - /api/authors/:id
 * @access Private
 * */

 exports.detail = asyncHandler(async (req, res, next) => {

  const author = await Author.findById({ _id: req.params.id }).populate('books', 'year comments');

  return res
  .status(200)
  .json({
    success: true,
    message: 'Read single author.',
    data: author
  });

});

/**
 * @desc Update single author
 * @route PATCH - /api/authors/:id
 * @access Private
 * */

 exports.update = asyncHandler(async (req, res, next) => {

  const updatedAuthor = await Author.findOneAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

  return res
  .status(200)
  .json({
    success: true,
    message: 'Update single author.',
    data: updatedAuthor
  });

});

/**
 * @desc Delete single author
 * @route DELETE - /api/authors/:id
 * @access Private
 * */

 exports.remove = asyncHandler(async (req, res, next) => {

  const author = await Author.findById({ _id: req.params.id });
  author.remove();

  return res
  .status(200)
  .json({
    success: true,
    message: `${author.fullname} has been deleted.`
  });

});

/**
 * @desc Delete author collection
 * @route DELETE - /api/authors
 * @access Private
 * */

 exports.drop = asyncHandler(async (req, res, next) => {

  await Author.collection.drop();

  return res
  .status(200)
  .json({
    success: true,
    message: 'Drop author collection.'
  });

});