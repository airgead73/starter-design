const asyncHandler = require('express-async-handler');


/////////////////////////////////
//////////// CLIENT /////////////
/////////////////////////////////

/**
 * @desc Create author client
 * @route GET - /authors/add
 * @access Private
 * */
 exports.create_client = asyncHandler(async (req, res, next) => {
  res.send('create author (CLIENT)');
});

/**
 * @desc Read authors client
 * @route GET - /authors
 * @access Private
 * */
exports.read_client = asyncHandler(async (req, res, next) => {
  res.send('read authors (CLIENT)');
});

/**
 * @desc Drop authors client
 * @route GET - /authors/drop
 * @access Private
 * */
exports.drop_client = asyncHandler(async (req, res, next) => {
  res.send('drop authors (CLIENT)');
});

/**
 * @desc Read detail client
 * @route GET - /authors/:id
 * @access Private
 * */
exports.detail_client = asyncHandler(async (req, res, next) => {
  res.send(`author detail (CLIENT): ${req.params.id}`);
});

/**
 * @desc Update authors client
 * @route GET - /authors/:id/update
 * @access Private
 * */
exports.update_client = asyncHandler(async (req, res, next) => {
  res.send(`update author (CLIENT): ${req.params.id}`);
});

/**
 * @desc Delete author client
 * @route GET - /authors/:id/delete
 * @access Private
 * */
exports.delete_client = asyncHandler(async (req, res, next) => {
  res.send(`delete author (CLIENT): ${req.params.id}.`);
});