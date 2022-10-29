const { Router } = require('express');
const homeRouter = Router();
const Author = require('../../units.api/authors/author');

// controllers
const { home, authors } = require('./home.controller');

// middleware
const { handleQuery } = require('../../middleware');

// routes
homeRouter.route('/').get(home);
homeRouter.route('/authors').get(handleQuery(Author), authors);

// export
module.exports = homeRouter;