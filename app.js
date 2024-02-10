const express = require('express');
const morgan = require('morgan');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const app = express();

// GLOBAL MIDDLEWARE

// converting a JSON string to a JSON object for data manipulation
app.use(express.json());

// global error handling
app.use(globalErrorHandler);

//use of printing each reqeust details in the console
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// ROUTES

//global routh not found error handling
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

//global error handling
app.use(globalErrorHandler);
module.exports = app;
