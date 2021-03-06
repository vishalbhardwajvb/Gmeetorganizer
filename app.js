var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const bodyParser=require("body-parser")
var logger = require('morgan');
var db = 'mongodb://localhost/organizer';
const mongoose=require("mongoose")
const cors=require("cors");

require('dotenv').config()
db = 'mongodb+srv://abhiman:herohere@cluster0-8s4cf.mongodb.net/gmeetorganizer?retryWrites=true&w=majority';


// view engine setup
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())




app.use('/',require("./routes/auth"));
app.use('/',require('./routes/lecture'))
app.use('/',require("./routes/home"));
app.use('/',require('./routes/category'));
app.use('/',require("./routes/user"));




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("DB CONNECTED");
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
