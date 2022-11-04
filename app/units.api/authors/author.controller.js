const asyncHandler = require('express-async-handler');

/**
 * @desc Create author
 * @route POST - /api/authors
 * @access Private
 * */

exports.create = asyncHandler(async (req, res, next) => {

  return res
  .status(200)
  .json({
    success: true,
    message: 'Author has been created.'
  });

});

/**
 * @desc Read authors
 * @route GET - /api/authors
 * @access Private
 * */

 exports.read = asyncHandler(async (req, res, next) => {

  return res
  .status(200)
  .json({
    success: true,
    message: 'Read multiple authors.'
  });

});

/**
 * @desc Read single author
 * @route GET - /api/authors/:id
 * @access Private
 * */

 exports.detail = asyncHandler(async (req, res, next) => {

  return res
  .status(200)
  .json({
    success: true,
    message: 'Read single author.'
  });

});

/**
 * @desc Update single author
 * @route PATCH - /api/authors/:id
 * @access Private
 * */

 exports.update = asyncHandler(async (req, res, next) => {

  return res
  .status(200)
  .json({
    success: true,
    message: 'Update single author.'
  });

});

/**
 * @desc Delete single author
 * @route DELETE - /api/authors/:id
 * @access Private
 * */

 exports.remove = asyncHandler(async (req, res, next) => {

  return res
  .status(200)
  .json({
    success: true,
    message: 'Remove single author.'
  });

});

/**
 * @desc Delete author collection
 * @route DELETE - /api/authors
 * @access Private
 * */

 exports.drop = asyncHandler(async (req, res, next) => {

  return res
  .status(200)
  .json({
    success: true,
    message: 'Drop author collection.'
  });

});