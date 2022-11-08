const { Router } = require('express');
const { authorApi } = require('.');
const authorAPI = Router();
const authorCLIENT = Router();

// controllers
const { create, read, detail, update, remove, drop } = require('./author.controller');

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

// client routes "/authors"
authorCLIENT.get('/', function(req,res,next) {
  res.send('read authors (CLIENT)');
});

// client routes "/authors/add"
authorCLIENT.get('/add', function(req,res,next) {
  res.send('create author (CLIENT)');
});

// client routes "/authors/drop"
authorCLIENT.get('/drop', function(req,res,next) {
  res.send('drop author collection (CLIENT)');
});

// client routes "/authors/:id"
authorCLIENT.get('/:id', function(req,res,next) {
  res.send(`read author detail (CLIENT): ${req.params.id}`);
});

// client routes "/authors/:id/update"
authorCLIENT.get('/:id/update', function(req,res,next) {
  res.send(`update author detail (CLIENT): ${req.params.id}`);
});

// client routes "/authors/:id/delet"
authorCLIENT.get('/:id/delete', function(req,res,next) {
  res.send(`delete author detail (CLIENT): ${req.params.id}`);
});

module.exports = {
  authorAPI,
  authorCLIENT
};