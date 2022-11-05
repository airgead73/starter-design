const { Router } = require('express');
const bookRouter = Router();

// controllers
const { create, read, detail, update, remove, drop } = require('./book.controller');

// routes
bookRouter
  .route('/')
  .post(create)
  .get(read)
  .delete(drop);

bookRouter
  .route('/:id') 
  .get(detail)
  .patch(update)
  .delete(remove);

module.exports = bookRouter;  