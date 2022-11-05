const { Router } = require('express');
const bookRouter = Router();

// controllers
const { create, read, detail, update, remove, drop } = require('./book.controller');

// middleware
const { validationRules, validate } = require('../../middleware');

// routes
bookRouter
  .route('/')
  .post(validationRules('createAuthor'), validate, create)
  .get(read)
  .delete(drop);

bookRouter
  .route('/:id') 
  .get(detail)
  .patch(update)
  .delete(remove);

module.exports = bookRouter;  