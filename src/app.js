const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index.routes');
const usersRouter = require('./routes/users.routes');
const linkedInRouter = require('./routes/jobs.routes');
const notFoundHandler = require('./middleware/error-handlers/404.js');
const errorHandler = require('./middleware/error-handlers/500.js');

const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/jobs', linkedInRouter);
app.use('/users', usersRouter);

app.use('*', notFoundHandler);
app.use(errorHandler);

// catch 404 and forward to error handler

module.exports = app;
