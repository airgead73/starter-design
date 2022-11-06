const { Router } = require('express');
const apiRouter = Router();
const { authorRouter } = require('./authors');
const { bookRouter } = require('./books');
const { photoRouter } = require('./photos');

apiRouter.use('/authors', authorRouter);
apiRouter.use('/books', bookRouter);
apiRouter.use('/photos', photoRouter);

module.exports = apiRouter;