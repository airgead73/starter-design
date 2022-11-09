const { Router } = require('express');
const apiRouter = Router();
const { authorRouter } = require('./authors');

apiRouter.use('/authors', authorRouter);

module.exports = apiRouter;