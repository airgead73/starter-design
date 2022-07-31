const { Router } = require('express');
const templateRouter = Router();

// controllers
const { dashboard } = require('./templates.controller');

// middleware
//const { handleQuery } = require('../../middleware');

//routes
templateRouter.route('/').get(handleQuery(Author), dashboard);

// export
module.exports = templateRouter;
