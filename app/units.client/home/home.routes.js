const { Router } = require('express');
const homeRouter = Router();

// controllers
const { home } = require('./home.controller');

// middleware

// routes
homeRouter.route('/').get(home);

// export
module.exports = homeRouter;