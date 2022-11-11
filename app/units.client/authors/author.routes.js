const { Router } = require('express');
const authorRouter = Router();

authorRouter.use('/:id', (req, res, next) => {
  res.send(`CLIENT: author detail: ${req.params.id}`);
});

authorRouter.use('/', (req, res, next) => {
  res.send('CLIENT: authors');
});



module.exports = authorRouter;