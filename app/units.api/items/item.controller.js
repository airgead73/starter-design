const asyncHandler = require('express-async-handler');

/////////////////////////////////
//////////// API ////////////////
/////////////////////////////////


/**
 * @desc Create item
 * @route POST - /api/items
 * @access Private
 * */

exports.create = asyncHandler(async (req, res, next) => {
  res.send('create item (API)');
});

/**
 * @desc Read items
 * @route GET - /api/items
 * @access Private
 * */

exports.read = asyncHandler(async (req, res, next) => {
  res.send('read items (API)');
});

/**
 * @desc Read item detail
 * @route GET - /api/items/:id
 * @access Private
 * */

 exports.detail = asyncHandler(async (req, res, next) => {
  res.send(`read item detail (API): ${req.params.id}`);
});

/**
 * @desc Update item
 * @route PATCH - /api/items/:id
 * @access Private
 * */

 exports.update = asyncHandler(async (req, res, next) => {
  res.send(`update item (API): ${req.params.id}`);
});

/**
 * @desc Delete item
 * @route PATCH - /api/items/:id
 * @access Private
 * */

 exports.remove = asyncHandler(async (req, res, next) => {
  res.send(`remove item (API): ${req.params.id}`);
});

/**
 * @desc Drop item collection
 * @route DELETE - /api/items
 * @access Private
 * */

exports.drop = asyncHandler(async (req, res, next) => {
  res.send('drop item collection (API)');
});

/////////////////////////////////
//////////// CLIENT /////////////
/////////////////////////////////

/**
 * @desc Create item client
 * @route GET - /items/add
 * @access Private
 * */
exports.create_client = asyncHandler(async (req, res, next) => {
  res.send('create item (CLIENT)');
});

/**
 * @desc Read items client
 * @route GET - /items
 * @access Private
 * */
exports.read_client = asyncHandler(async (req, res, next) => {
  res.send('read items (CLIENT)');
});

/**
 * @desc Drop items client
 * @route GET - /items/drop
 * @access Private
 * */
exports.drop_client = asyncHandler(async (req, res, next) => {
  res.send('drop items (CLIENT)');
});

/**
 * @desc Read detail client
 * @route GET - /items/:id
 * @access Private
 * */
exports.detail_client = asyncHandler(async (req, res, next) => {
  res.send(`item detail (CLIENT): ${req.params.id}`);
});

/**
 * @desc Update items client
 * @route GET - /items/:id/update
 * @access Private
 * */
exports.update_client = asyncHandler(async (req, res, next) => {
  res.send(`update item (CLIENT): ${req.params.id}`);
});

/**
 * @desc Delete item client
 * @route GET - /items/:id/delete
 * @access Private
 * */
exports.delete_client = asyncHandler(async (req, res, next) => {
  res.send(`delete item (CLIENT): ${req.params.id}.`);
});