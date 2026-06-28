var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


// Ruta de novela 1
app.get('/novela-01', function (req, res) {
  res.send('En esta página debería aparecer un pdf con una novela')
}) //Esta ruta funcionó bien

// Ruta de novela 02
app.get('/novela-02', function (req, res) {
  res.send('En esta página debería aparecer un pdf con una novela')
}) //Esta ruta funcionó bien

// Ruta de novela 03
app.get('/novela-03', function (req, res) {
  res.send('En esta página debería aparecer un pdf con una novela')
}) //Esta ruta funcionó bien

// Ruta de novela 04
app.get('/novela-04', function (req, res) {
  res.send('En esta página debería aparecer un pdf con una novela')
}) //Esta ruta funcionó bien

// Ruta de novela 05
app.get('/novela-05', function (req, res) {
  res.send('En esta página debería aparecer un pdf con una novela')
}) //Esta ruta funcionó bien

// Ruta de novela 06
app.get('/novela-06', function (req, res) {
  res.send('En esta página debería aparecer un pdf con una novela')
}) //Esta ruta funcionó bien

// Ruta de novela grafica 01
app.get('/novela-grafica-01', function (req, res) {
  res.send('En esta página debería aparecer un pdf con una novela grafica')
}) //Esta ruta funcionó bien

// Ruta de novela grafica 02
app.get('/novela-grafica-02', function (req, res) {
  res.send('En esta página debería aparecer un pdf con una novela grafica')
}) //Esta ruta funcionó bien

// Ruta de novela grafica 03
app.get('/novela-grafica-03', function(req,res){
  res.send('En esta página debería aparecer un pdf con una novela grafica')
  }) //Esta ruta funcionó bien

// Ruta de novela grafica 04
app.get('/novela-grafica-04', function(req,res){
  res.send('En esta página debería aparecer un pdf con una novela grafica')
  }) //Esta ruta funcionó bien

// Ruta de novela grafica 05
app.get('/novela-grafica-05', function(req,res){
  res.send('En esta página debería aparecer un pdf con una novela grafica')
  }) //Esta ruta funcionó bien

// Ruta de novela grafica 06
app.get('/novela-grafica-06', function(req,res){
  res.send('En esta página debería aparecer un pdf con una novela grafica')
  }) //Esta ruta funcionó bien

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
