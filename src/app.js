var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require('method-override');
const {body,validationResult} = require('express-validator');
const session = require('express-session');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');  
const taskApiRoutes = require ('./routes/apiRoutes/taskApiRoutes')
const userApiRoutes = require ('./routes/apiRoutes/userApiroutes')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'..','public')));
app.use(methodOverride('_method')),
app.use(session({
  secret:"appTareas!",
  resave: true,
  saveUninitialized: true
}))

app.use('/home', indexRouter);
app.use('/', usersRouter); 
//apis
app.use('/api/taskes',taskApiRoutes)
app.use('/api/users',userApiRoutes)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
