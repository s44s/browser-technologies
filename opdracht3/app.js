// modules laden (express als framework)
var express = require('express');
var app = express();
var bodyParser = require('body-parser')

// view engine setup > templates weergeven
app.set('views', 'views');
app.set('view engine', 'ejs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//de routes defineren (zelfde structuur als mappen)
var indexRouter = require('./routes/index');
var basketRouter = require('./routes/basket');

// connect routers to routes, weblinkjes
app.use('/', indexRouter);
app.use('/basket', basketRouter);


// Tell express which static files to serve
app.use(express.static('public'));

//run
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
