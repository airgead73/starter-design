const { Router } = require('express');
const authorRouter = Router();
const Author = require('../../units.api/authors/author');

// controllers
const { dashboard, add, detail, update } = require('./authors.controller');

// middleware
const { handleQuery } = require('../../middleware');

//routes
authorRouter.route('/').get(handleQuery(Author), dashboard);
authorRouter.route('/add').get(add);
authorRouter.route('/:id').get(detail);
authorRouter.route('/:id/update').get(update);

// export
module.exports = authorRouter;
