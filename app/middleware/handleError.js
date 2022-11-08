const { isDev } = require('../config/env');
const handleError = (err, req, res, next) => {
  res.send('Something went wrong');
  // let statusCode = err.status || res.statusCode || 500;
  // if(err.name === 'CastError') {
  //   err.message = 'Item cannot be found.'
  //   statusCode = 404
  // }

  // const errorObject = {
  //   success: false,
  //   message: err.message,
  //   status: statusCode,
  //   name: err.name,
  //   response: err.response || null,
  //   stack: process.env.NODE_ENV === 'production' ? null : err.stack
  // }

  // if(err.response === 'html') {
  //   return res
  //     .status(statusCode)
  //     .render('pages/home', {
  //       success: false,
  //       status: statusCode,
  //       message: err.message,
  //       title: 'Error',
  //       main: 'main--error',
  //       development: isDev,
  //       partialPath: '../partials/error'
  //     })
  // } else {
  //   return res
  //     .status(statusCode)
  //     .json(errorObject);
  // }
  
}

module.exports = handleError;