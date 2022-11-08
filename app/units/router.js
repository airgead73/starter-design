const { Router } = require('express');
const router = Router();
const { authorAPI, authorCLIENT } = require('./authors/author.routes');

router.use('/authors', authorCLIENT);

router.use('/api/authors', authorAPI);

module.exports = router;