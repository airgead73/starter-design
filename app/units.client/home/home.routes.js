const { Router } = require('express');
const homeRouter = Router();

// controllers
const { home, authors, books, photos } = require('./home.controller');

// middleware

// routes
homeRouter.route('/').get(home);
homeRouter.route('/authors').get(authors);
homeRouter.route('/books').get(books);
homeRouter.route('/photos').get(photos);

// export
module.exports = homeRouter;