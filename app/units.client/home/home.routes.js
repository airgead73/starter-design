const { Router } = require('express');
const homeRouter = Router();

// controllers
const { home, authors, books } = require('./home.controller');

// middleware

// routes
homeRouter.route('/').get(home);
homeRouter.route('/authors').get(authors);
homeRouter.route('/books').get(books);

// export
module.exports = homeRouter;