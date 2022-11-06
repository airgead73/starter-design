const asyncHandler = require('express-async-handler');
const Photo = require('./photo');

/**
 * @desc Create photo
 * @route POST - /api/photos
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
      message: 'Error: Something went wrong.',
      errors: responseErrors
    });
  }

  const photo = new Photo(res.results);
  await photo.save();

  return res
    .status(200)
    .json({
      success: true,
      message: `Photo ${photo.work} has been created.`,
      photo
    });

});

/**
 * @desc Read photos
 * @route GET - /api/photos
 * @access Private
 * */

 exports.read = asyncHandler(async (req, res, next) => {

  const { success, count, data: photos } = res.results;

  return res
    .status(200)
    .json({
      success,
      count,
      photos      
    });

});

/**
 * @desc Read photo detail
 * @route GET - /api/photos/:id
 * @access Private
 * */

 exports.detail = asyncHandler(async (req, res, next) => {

  return res
    .status(200)
    .json({
      success: true,
      message: 'GET photo detail'
    });

});

/**
 * @desc Update photo
 * @route PUT - /api/photos/:id
 * @access Private
 * */

 exports.update = asyncHandler(async (req, res, next) => {

  return res
    .status(200)
    .json({
      success: true,
      message: 'PUT photo'
    });

});

/**
 * @desc Delete photo
 * @route DELETE - /api/photos/:id
 * @access Private
 * */

 exports.remove = asyncHandler(async (req, res, next) => {

  return res
    .status(200)
    .json({
      success: true,
      message: 'DELETE photo'
    });

});