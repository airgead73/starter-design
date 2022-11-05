const { Router } = require('express');
const clientRouter = Router();
const { homeRouter } = require('./home');

// middleware
const { checkAuthClient } = require('../middleware');
clientRouter.use(checkAuthClient);

// routes
clientRouter.use('/', homeRouter);

// export
module.exports = clientRouter;