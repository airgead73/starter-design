const { Router } = require('express');
const clientRouter = Router();
const dashboardRouter = require('./dashboard/dashboard.routes');

clientRouter.use('/', dashboardRouter);

module.exports = clientRouter;