const asyncHandler = require('express-async-handler');

/**
 * @desc Create photo
 * @route POST - /api/photos
 * @access Private
 * */

exports.create = asyncHandler(async (req, res, next) => {

  return res
    .status(200)
    .json({
      success: true,
      message: 'POST photo'
    });

});

/**
 * @desc Read photos
 * @route GET - /api/photos
 * @access Private
 * */

 exports.read = asyncHandler(async (req, res, next) => {

  return res
    .status(200)
    .json({
      success: true,
      message: 'GET photos'
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