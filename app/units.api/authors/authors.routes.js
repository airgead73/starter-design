const { Router } = require('express');
const authorRouter = Router();
const Author = require('./author');

// controllers
const { create, read, detail, update, remove } = require('./authors.controller');

// middleware
const { validationRules, validate } = require('../../middleware');
const { handleQuery } = require('../../middleware');

// routes
authorRouter.route('/').get(handleQuery(Author), read).post(validationRules('createAuthor'), validate, create);
authorRouter.route('/:id').get(detail).put(update).delete(remove);

// export
module.exports = authorRouter;