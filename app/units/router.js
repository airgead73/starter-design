const { Router } = require('express');
const router = Router();
const { authorAPI, authorCLIENT } = require('./authors/author.routes');
const { itemAPI, itemCLIENT } = require('./items/item.routes');

router.use('/authors', authorCLIENT);
router.use('/items', itemCLIENT);

router.use('/api/authors', authorAPI);
router.use('/api/items', itemAPI);

module.exports = router;