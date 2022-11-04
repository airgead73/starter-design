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

const photoArray = [
  body('work')
    .not().isEmpty()
    .withMessage('Provide a work.')
    .isLength({ max: 50 })
    .trim()
    .escape(),
  body('title')
    .not().isEmpty()
    .withMessage('Provide a title.')
    .isLength({ max: 50 })    
    .trim()
    .escape(),
];

module.exports = {
  authorArray,
  photoArray
}