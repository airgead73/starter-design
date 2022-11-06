const { Router } = require('express');
const photoRouter = Router();
const Photo = require('./photo');

// controllers
const { create, read, detail, update, remove } = require('./photos.controller');

// middleware
const { handleCloudinary, validationRules, validate, handleQuery } = require('../../middleware');

// routes
photoRouter
  .route('/')
  .get(handleQuery(Photo), read)
  .post(validationRules('createPhoto'), validate, handleCloudinary, create);

photoRouter
  .route('/:id')
  .get(detail)
  .put(update)
  .delete(remove);

// export
module.exports = photoRouter;