var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config(); 
const connectionString = process.env.MONGO_CON 
mongoose = require('mongoose'); 
mongoose.connect(connectionString,  {useNewUrlParser: true, useUnifiedTopology: true});

var Drinks = require("./models/Drinks"); 
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var gridbuildRouter = require('./routes/gridbuild');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');
var drinkRouter = require('./routes/Drinks');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/gridbuild',gridbuildRouter);
app.use('/selector',selectorRouter);
app.use('/resource', resourceRouter);
app.use('/Drinks',drinkRouter);

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

//Get the default connection 
var db = mongoose.connection; 
 
//Bind connection to error event  
db.on('error', console.error.bind(console, 'MongoDB connection error:')); 
db.once("open", function(){ 
console.log("Connection to DB succeeded")}); 
// We can seed the collection if needed on server start 
async function recreateDB() { 
  // Delete everything
  await Drinks.deleteMany(); 
 
  let instance1 = new 
Drinks({drink_Name:"Dr.pepper",  shop: "Walmart", price: 1.29}); 
  instance1.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("First object saved") 
  }); 
  let instance2 = new 
Drinks({drink_Name: "Sprite", shop: "Hyvee", price: 2.99});  
  instance2.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("Second object saved") 
  }); 
  let instance3 = new 
Drinks({drink_Name: "Dite Coke", shop: "M P Mart", price: 2.79}); 
  instance3.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("Third object saved") 
  }); 
  let instance4 = new 
Drinks({drink_Name: "7 up", shop: "Doller General", price: 3.29}); 
  instance4.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("Fourth object saved") 
  }); 
  let instance5 = new 
Drinks({ drink_Name: "Mountain Dew", shop: "Doller Tree", price: 1.79}); 
  instance5.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("Fifth object saved") 
  });
} 
 
let reseed = true; 
if (reseed) { recreateDB();} 

module.exports = app;
