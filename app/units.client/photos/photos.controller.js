const asyncHandler = require('express-async-handler');
const { isDev } = require('../../config/env');

/**
 * @desc photo dashboard view
 * @route GET - /photos
 * @access Private
 * */

exports.dashboard = asyncHandler(async (req, res, next) => {
  return res
    .status(200)
    .render('pages/photos/dashboard', {
      title: 'photos',
      development: isDev
    });
});

/**
 * @desc photo add view
 * @route GET - /photos/add
 * @access Private
 * */

 exports.add = asyncHandler(async (req, res, next) => {
  return res
    .status(200)
    .render('pages/photos/add', {
      title: 'add photo',
      development: isDev
    });
});

/**
 * @desc photo detail view
 * @route GET - /photos/:id
 * @access Private
 * */

 exports.detail = asyncHandler(async (req, res, next) => {
  return res
    .status(200)
    .render('pages/photos/detail', {
      title: 'photo detail',
      development: isDev
    });
});

/**
 * @desc photo update view
 * @route GET - /photos/:id/update
 * @access Private
 * */

 exports.update = asyncHandler(async (req, res, next) => {
  return res
    .status(200)
    .render('pages/photos/update', {
      title: 'photos',
      development: isDev
    });
});
