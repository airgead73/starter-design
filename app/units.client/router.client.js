const { Router } = require('express');
const clientRouter = Router();
const dashboardRouter = require('./dashboard/dashboard.routes');
const authorRouter = require('./authors/author.routes');

// middleware
const { checkAuthClient } = require('../middleware');
clientRouter.use(checkAuthClient);

clientRouter.use('/authors', authorRouter);
clientRouter.use('/', dashboardRouter);


module.exports = clientRouter;