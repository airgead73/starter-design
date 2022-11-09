const asyncHandler = require('express-async-handler');

/////////////////////////////////
//////////// API ////////////////
/////////////////////////////////


/**
 * @desc Create author
 * @route POST - /api/authors
 * @access Private
 * */

exports.create = asyncHandler(async (req, res, next) => {
  res.send('create author (API)');
});

/**
 * @desc Read authors
 * @route GET - /api/authors
 * @access Private
 * */

exports.read = asyncHandler(async (req, res, next) => {
  res.send('read authors (API)');
});

/**
 * @desc Read author detail
 * @route GET - /api/authors/:id
 * @access Private
 * */

 exports.detail = asyncHandler(async (req, res, next) => {
  res.send(`read author detail (API): ${req.params.id}`);
});

/**
 * @desc Update author
 * @route PATCH - /api/authors/:id
 * @access Private
 * */

 exports.update = asyncHandler(async (req, res, next) => {
  res.send(`update author (API): ${req.params.id}`);
});

/**
 * @desc Delete author
 * @route PATCH - /api/authors/:id
 * @access Private
 * */

 exports.remove = asyncHandler(async (req, res, next) => {
  res.send(`remove author (API): ${req.params.id}`);
});

/**
 * @desc Drop author collection
 * @route DELETE - /api/authors
 * @access Private
 * */

exports.drop = asyncHandler(async (req, res, next) => {
  res.send('drop author collection (API)');
});