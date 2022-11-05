const { Router } = require('express');
const authorRouter = Router();
const Author = require('./author');

// controllers
const { create, read, detail, update, remove, drop } = require('./author.controller');

// middleware
const { validationRules, validate } = require('../../middleware');

// /:id middleware
//authorRouter.use('/:id', isMongooseID);

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