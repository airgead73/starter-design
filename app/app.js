/**
 * external imports
 */

 const express = require('express');
 const { auth } = require('express-openid-connect');
 const path = require('path');
 const cors = require('cors');
 const cookieParser = require('cookie-parser');
 const helmet = require('helmet');
 const hpp = require('hpp');
 const mongoSanitize = require('express-mongo-sanitize');
 const session = require('express-session');
 const xss = require('xss-clean');

/**
 * internal imports
 */

const { handleError } = require('./middleware');
const { authConfig, connectDB, helmetPolicies, limiter, sessionConfig } = require('./config');
const apiRouter = require('./units.api/router.api');
const clientRouter = require('./units.client/router.client');

/**
 * app activation
 */

const app = express();
connectDB();
app.use(auth(authConfig));

/**
 * security
 */

 app.use(helmet({ crossOriginEmbedderPolicy: false }));
 app.use(helmet.contentSecurityPolicy(helmetPolicies));
 app.use(xss());
 app.use(hpp());
 app.use(cors());
 app.use(mongoSanitize());
 app.use(limiter);

/**
 * middleware
 */

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());
app.use(session(sessionConfig));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/**
 * locals
 */

 app.use(function (req, res, next) {
  res.locals.isAuthenticated = req.oidc.isAuthenticated();
  next();
});

/**
 * routes
 */

app.use('/api', apiRouter);
app.use('/', clientRouter);

// app.get('/authors/add', (req,res,next) => {
//   res.send('CLIENT: add author');
// });

// app.get('/authors/drop', (req,res,next) => {
//   res.send('CLIENT: drop author collection');
// });

// app.get('/authors/:id/update', (req,res,next) => {
//   res.send(`CLIENT: author update ${req.params.id}`);
// });

// app.get('/authors/:id/delete', (req,res,next) => {
//   res.send(`CLIENT: author delete ${req.params.id}`);
// });

// app.get('/authors/:id', (req,res,next) => {
//   res.send(`CLIENT: author detail ${req.params.id}`);
// });

// app.get('/authors', (req,res,next) => {
//   res.send('CLIENT: authors');
// });












/**
 * error handling
 */

 app.use(function(req, res, next) {
  const error = new Error('Path not found.');
  error.status = 404;
  error.response = 'html'
  next(error);
});

app.use(handleError);

/**
 * export app
 */

module.exports = app;