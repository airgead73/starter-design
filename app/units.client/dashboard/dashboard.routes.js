const { Router } = require('express');
const dashboardRouter = Router();

const { dashboard } = require('./dashboard.controller');

dashboardRouter.route('/').get(dashboard);

module.exports = dashboardRouter;