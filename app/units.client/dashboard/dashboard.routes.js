const { Router } = require('express');
const dashboardRouter = Router();

dashboardRouter.use('/', (req,res,next) => {
  res.send('CLIENT: dashboard');
});

module.exports = dashboardRouter;