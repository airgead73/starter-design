const { Router } = require('express');
const bookRouter = Router();

// controllers
const { create, read, detail, update, remove } = require('./books.controller');

// routes
bookRouter.route('/').get(read).post(create);
bookRouter.route('/:id').get(detail).put(update).delete(remove);

// export
module.exports = bookRouter;