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

/////////////////////////////////
//////////// CLIENT /////////////
/////////////////////////////////

/**
 * @desc Create author client
 * @route GET - /authors/add
 * @access Private
 * */
exports.create_client = asyncHandler(async (req, res, next) => {
  res.send('create author (API)');
  // return res
  //   .status(200)
  //   .render('layout/page', {
  //     development: isDev,
  //     test: isTest,
  //     partialPath: '../partials/authors/add'
  //   });
});

/**
 * @desc Read authors client
 * @route GET - /authors
 * @access Private
 * */
exports.read_client = asyncHandler(async (req, res, next) => {
  //res.send('read authors (API)');
  return res
    .status(200)
    .render('layout/page', {
      development: isDev,
      test: isTest,
      partialPath: '../partials/authors/index'
    });
});

/**
 * @desc Drop authors client
 * @route GET - /authors/drop
 * @access Private
 * */
exports.drop_client = asyncHandler(async (req, res, next) => {
  return res
    .status(200)
    .render('layout/page', {
      development: isDev,
      test: isTest,
      partialPath: '../partials/authors/drop'
    });
});

/**
 * @desc Read detail client
 * @route GET - /authors/:id
 * @access Private
 * */
exports.detail_client = asyncHandler(async (req, res, next) => {
  return res
    .status(200)
    .render('layout/page', {
      development: isDev,
      test: isTest,
      partialPath: '../partials/authors/detail'
    });
});

/**
 * @desc Update authors client
 * @route GET - /authors/:id/update
 * @access Private
 * */
exports.update_client = asyncHandler(async (req, res, next) => {
  return res
    .status(200)
    .render('layout/page', {
      development: isDev,
      test: isTest,
      partialPath: '../partials/authors/update'
    });
});

/**
 * @desc Delete author client
 * @route GET - /authors/:id/delete
 * @access Private
 * */
exports.delete_client = asyncHandler(async (req, res, next) => {
  return res
    .status(200)
    .render('layout/page', {
      development: isDev,
      test: isTest,
      partialPath: '../partials/authors/delete'
    });
});