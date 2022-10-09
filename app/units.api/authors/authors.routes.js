const { Router } = require('express');
const authorRouter = Router();
const Author = require('./author');

// controllers
const { create, read, detail, update, remove } = require('./authors.controller');

// middleware
const { validationRules, validate } = require('../../middleware');
const { handleQuery, handleDetail } = require('../../middleware');

// routes
authorRouter
  .route('/')
  .get(handleQuery(Author), read)
  .post(validationRules('createAuthor'), validate, create);

authorRouter
  .route('/:id')
  .get(handleDetail(Author), detail)
  .patch(handleDetail(Author), update)
  .delete(handleDetail(Author), remove);

// export
module.exports = authorRouter;