const asyncHandler = require('express-async-handler');

/**
 * @desc Create book
 * @route POST - /api/books
 * @access Private
 * */

exports.create = asyncHandler(async (req, res, next) => {

  return res
    .status(200)
    .json({
      success: true,
      message: 'POST book'
    });

});

/**
 * @desc Read books
 * @route GET - /api/books
 * @access Private
 * */

 exports.read = asyncHandler(async (req, res, next) => {

  return res
    .status(200)
    .json({
      success: true,
      message: 'GET books'
    });

});

/**
 * @desc Read book detail
 * @route GET - /api/books/:id
 * @access Private
 * */

 exports.detail = asyncHandler(async (req, res, next) => {

  return res
    .status(200)
    .json({
      success: true,
      message: 'GET book detail'
    });

});

/**
 * @desc Update book
 * @route PUT - /api/books/:id
 * @access Private
 * */

 exports.update = asyncHandler(async (req, res, next) => {

  return res
    .status(200)
    .json({
      success: true,
      message: 'PUT book'
    });

});

/**
 * @desc Delete book
 * @route DELETE - /api/books/:id
 * @access Private
 * */

 exports.remove = asyncHandler(async (req, res, next) => {

  return res
    .status(200)
    .json({
      success: true,
      message: 'DELETE book'
    });

});