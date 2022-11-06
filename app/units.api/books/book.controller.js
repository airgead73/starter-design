const asyncHandler = require('express-async-handler');
const Book = require('./book');

/**
 * @desc Create book
 * @route POST - /api/books
 * @access Private
 * */

exports.create = asyncHandler(async (req, res, next) => {

  const { success, errors } = res.val_results;

  if(!success) {

    const { errors: responseErrors } = errors;

    return res
      .status(400)
      .json({
        success: false,
        message: 'Error: something went wrong.',
        errors: responseErrors
      });    

  }

  const book = new Book(req.body);
  await book.save();

  return res
  .status(200)
  .json({
    success: true,
    message: `${book.title} as been created.`,
    data: book
  });

});

/**
 * @desc Read books
 * @route GET - /api/books
 * @access Private
 * */

 exports.read = asyncHandler(async (req, res, next) => {

  //const books = await Book.find().populate('author');
  const books = await Book.find().populate({ path: 'author', options: { sort: { 'lname': 1 }} });

  return res
  .status(200)
  .json({
    success: true,
    message: 'Read multiple books.',
    count: books.length,
    data: books
  });

});

/**
 * @desc Read single book
 * @route GET - /api/books/:id
 * @access Private
 * */

 exports.detail = asyncHandler(async (req, res, next) => {

  const book = await Book.findById({ _id: req.params.id });

  return res
  .status(200)
  .json({
    success: true,
    message: 'Read single book.',
    data: book
  });

});

/**
 * @desc Update single book
 * @route PATCH - /api/books/:id
 * @access Private
 * */

 exports.update = asyncHandler(async (req, res, next) => {

  console.log(req.params.id);

  const updatedBook = await Book.findOneAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).populate('author');

  console.log(updatedBook);

  return res
  .status(200)
  .json({
    success: true,
    message: 'Update single book.',
    data: updatedBook
  });

});

/**
 * @desc Delete single book
 * @route DELETE - /api/books/:id
 * @access Private
 * */

 exports.remove = asyncHandler(async (req, res, next) => {

  const book = await Book.findById({ _id: req.params.id });
  book.remove();

  return res
  .status(200)
  .json({
    success: true,
    message: `${book.title} has been deleted.`
  });

});

/**
 * @desc Delete book collection
 * @route DELETE - /api/books
 * @access Private
 * */

 exports.drop = asyncHandler(async (req, res, next) => {

  await Book.collection.drop();

  return res
  .status(200)
  .json({
    success: true,
    message: 'Drop book collection.'
  });

});