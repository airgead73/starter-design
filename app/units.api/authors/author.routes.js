const { Router } = require('express');
const authorRouter = Router();
const Author = require('./author');

// controllers
const { create, read, detail, update, remove, drop } = require('./author.controller');

// middleware
const { checkID, validationRules, validate } = require('../../middleware');
  // for route /:id
authorRouter.use('/:id', checkID(Author));

// routes
authorRouter
  .route('/')
  .post(validationRules('createAuthor'), validate, create)
  .get(read)
  .delete(drop);

authorRouter
  .route('/:id') 
  .get(detail)
  .patch(update)
  .delete(remove);

module.exports = authorRouter;  