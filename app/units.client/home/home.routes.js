const { Router } = require('express');
const homeRouter = Router();

// controllers
const { home } = require('./home.controller');

// routes
homeRouter.route('/').get(home);

// export
module.exports = homeRouter;