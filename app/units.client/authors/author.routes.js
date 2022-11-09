const { Router } = require('express');
const authorRouter = Router();

// controllers
const { create_client, read_client, drop_client, detail_client, update_client, delete_client } = require('./author.controller');

/////////////////////////////////
//////////// CLIENT /////////////
/////////////////////////////////

authorRouter
  .route('/')
  .get(read_client);

authorRouter
  .route('/add')
  .get(create_client);

authorRouter
  .route('/drop')
  .get(drop_client);

authorRouter
  .route('/:id')
  .get(detail_client);
  
authorRouter
  .route('/:id/update')
  .get(update_client); 
  
authorRouter
  .route('/:id/delete')
  .get(delete_client);  

module.exports = authorRouter;