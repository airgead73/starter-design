const { Router } = require('express');
const clientRouter = Router();
const { homeRouter } = require('./home');

// middleware 
const { checkAuthClient } = require('../middleware');
clientRouter.use(checkAuthClient);

clientRouter.use('/', homeRouter);

// export
module.exports = clientRouter;