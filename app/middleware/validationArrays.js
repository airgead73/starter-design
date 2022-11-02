const { body } = require('express-validator');

const authorArray = [
  body('fname')
    .not().isEmpty()
    .withMessage('Provide a first name.')
    .isLength({ max: 50 })
    .trim()
    .escape(),
  body('lname')
    .not().isEmpty()
    .withMessage('Provide a last name.')
    .isLength({ max: 50 })    
    .trim()
    .escape(),
  body('dob')
  .not().isEmpty()
  .withMessage('Provide a last dob.')
  .escape(),
];


module.exports = {
  authorArray
}