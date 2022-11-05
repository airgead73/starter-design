const { Router } = require('express');
const apiRouter = Router();
const { authorRouter } = require('./authors');
const { bookRouter } = require('./books');

apiRouter.use('/authors', authorRouter);
apiRouter.use('/books', bookRouter);

module.exports = apiRouter;