var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({extended: false});
var jsonParser = bodyParser.json();

router.post('/', jsonParser, function(req, res, next) {
	console.log([req.body.item])
	res.render('basket', {
		groceries: req.body.item
  });
});

module.exports = router;
