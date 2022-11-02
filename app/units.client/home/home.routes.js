const { Router } = require('express');
const homeRouter = Router();
const Author = require('../../units.api/authors/author');
const Photo = require('../../units.api/photos/photo');

// controllers
const { home, authors, books, photos } = require('./home.controller');

// middleware
const { handleQuery } = require('../../middleware');

// routes
homeRouter.route('/').get(home);
homeRouter.route('/authors').get(handleQuery(Author), authors);
homeRouter.route('/books').get(books)
homeRouter.route('/photos').get(photos);

// export
module.exports = homeRouter;