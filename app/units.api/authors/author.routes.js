const { Router } = require('express');
const authorRouter = Router();

// controllers
const { create, read, detail, update, remove, drop } = require('./author.controller');

// routes
authorRouter
  .route('/')
  .post(create)
  .get(read)
  .delete(drop);

authorRouter
  .route('/:id') 
  .get(detail)
  .patch(update)
  .delete(remove);

module.exports = authorRouter;  