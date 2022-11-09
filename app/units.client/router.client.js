const { Router } = require('express');
const clientRouter = Router();
const { authorRouter } = require('./authors');

clientRouter.use('/authors', authorRouter);

module.exports = clientRouter;