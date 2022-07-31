const { body } = require('express-validator');

const authorArray = [
  body('fname')
    .not().isEmpty()
    .withMessage('Please, provide a first name.')
    .isLength({ max: 50 })
    .trim()
    .escape(),
  body('lname')
    .not().isEmpty()
    .withMessage('Please, provide a last name.')
    .isLength({ max: 50 })    
    .trim()
    .escape(),
  body('dob')
  .not().isEmpty()
  .withMessage('Please, provide a last dob.')
  .escape(),
];


module.exports = {
  authorArray
}