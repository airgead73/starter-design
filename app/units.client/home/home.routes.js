const { Router } = require('express');
const homeRouter = Router();

// controllers
const { home, authors } = require('./home.controller');

// routes
homeRouter.route('/').get(home);
homeRouter.route('/authors').get(authors);

// export
module.exports = homeRouter;