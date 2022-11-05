const { Router } = require('express');
const bookRouter = Router();
const Book = require('./book');

// controllers
const { create, read, detail, update, remove, drop } = require('./book.controller');

// middleware
const { checkID, validationRules, validate } = require('../../middleware');
  // for route /:id
bookRouter.use('/:id', checkID(Book));

// routes
bookRouter
  .route('/')
  .post(validationRules('createBook'), validate, create)
  .get(read)
  .delete(drop);

bookRouter
  .route('/:id') 
  .get(detail)
  .patch(update)
  .delete(remove);

module.exports = bookRouter;  