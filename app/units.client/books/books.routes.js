const { Router } = require('express');
const bookRouter = Router();

// controllers
const { dashboard, add, detail, update } = require('./books.controller');

//routes
bookRouter.route('/').get(dashboard);
bookRouter.route('/add').get(add);
bookRouter.route('/:id').get(detail);
bookRouter.route('/:id/update').get(update);

// export
module.exports = bookRouter;
