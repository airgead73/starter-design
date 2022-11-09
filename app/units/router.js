const { Router } = require('express');
const router = Router();
const { dashboardRouter } = require('./dashboard');
const { authorAPI, authorCLIENT } = require('./authors');
const { itemAPI, itemCLIENT } = require('./items');

router.use('/', dashboardRouter);
router.use('/authors', authorCLIENT);
router.use('/items', itemCLIENT);

router.use('/api/authors', authorAPI);
router.use('/api/items', itemAPI);

module.exports = router;