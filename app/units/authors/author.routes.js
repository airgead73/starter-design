const { Router } = require('express');
const authorAPI = Router();
const authorCLIENT = Router();

// controllers
const { create, read, detail, update, remove, drop, create_client, read_client, drop_client, detail_client, update_client, delete_client } = require('./author.controller');

/////////////////////////////////
//////////// API ////////////////
/////////////////////////////////

authorAPI
  .route('/')
  .get(read)
  .post(create)
  .delete(drop);

authorAPI
  .route('/:id')
  .get(detail)
  .patch(update)
  .delete(remove);

/////////////////////////////////
//////////// CLIENT /////////////
/////////////////////////////////

authorCLIENT
  .route('/')
  .get(read_client);

authorCLIENT
  .route('/add')
  .get(create_client);

authorCLIENT
  .route('/drop')
  .get(drop_client);

authorCLIENT
  .route('/:id')
  .get(detail_client);
  
authorCLIENT
  .route('/:id/update')
  .get(update_client); 
  
authorCLIENT
  .route('/:id/delete')
  .get(delete_client);  

module.exports = {
  authorAPI,
  authorCLIENT
};