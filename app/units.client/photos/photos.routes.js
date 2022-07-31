const { Router } = require('express');
const photoRouter = Router();

// controllers
const { dashboard, add, detail, update } = require('./photos.controller');

//routes
photoRouter.route('/').get(dashboard);
photoRouter.route('/add').get(add);
photoRouter.route('/:id').get(detail);
photoRouter.route('/:id/update').get(update);

// export
module.exports = photoRouter;
