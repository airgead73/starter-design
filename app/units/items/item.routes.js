const { Router } = require('express');
const itemAPI = Router();
const itemCLIENT = Router();

// controllers
const { create, read, detail, update, remove, drop, create_client, read_client, drop_client, detail_client, update_client, delete_client } = require('./item.controller');

/////////////////////////////////
//////////// API ////////////////
/////////////////////////////////

itemAPI
  .route('/')
  .get(read)
  .post(create)
  .delete(drop);

itemAPI
  .route('/:id')
  .get(detail)
  .patch(update)
  .delete(remove);

/////////////////////////////////
//////////// CLIENT /////////////
/////////////////////////////////

itemCLIENT
  .route('/')
  .get(read_client);

itemCLIENT
  .route('/add')
  .get(create_client);

itemCLIENT
  .route('/drop')
  .get(drop_client);

itemCLIENT
  .route('/:id')
  .get(detail_client);
  
itemCLIENT
  .route('/:id/update')
  .get(update_client); 
  
itemCLIENT
  .route('/:id/delete')
  .get(delete_client);  

module.exports = {
  itemAPI,
  itemCLIENT
};