var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var dotenv = require('dotenv');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('express-handlebars');
var mongoose = require('mongoose');

var routes = require('./routes/index');
var users = require('./routes/users');
var homePage = require('./routes/homePage');
var managementPage = require('./routes/management');

var app = express();
dotenv.config();

const dbUrl =
  'mongodb+srv://hddhoangducdat:83400319a@black-hole-wz8hs.mongodb.net/BlackHoleShop?retryWrites=true&w=majority';

// view engine setup
app.engine(
  'hbs',
  hbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/'
  })
);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const db = mongoose.connect(
  dbUrl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('db connected !');
  }
);

app.use('/', routes);
app.use('/user', users);
app.use('/home', homePage);
app.use('/management', managementPage);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
