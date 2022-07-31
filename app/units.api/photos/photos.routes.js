const { Router } = require('express');
const photoRouter = Router();

// controllers
const { create, read, detail, update, remove } = require('./photos.controller');

// routes
photoRouter.route('/').get(read).post(create);
photoRouter.route('/:id').get(detail).put(update).delete(remove);

// export
module.exports = photoRouter;