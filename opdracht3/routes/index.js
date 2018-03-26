var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({extended: false});
var jsonParser = bodyParser.json();

// var ah = require('albert-heijn');
// var url = 'https://www.ah.nl/producten/product/wi33693/ah-halfvolle-melk';
// ah.getNutritionFacts(url).then(console.log);

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
	});
});

router.post('/', jsonParser, function(req, res, next) {
	console.log([req.body.item])
	res.render('index', {
		groceries: req.body.item
  });
});

module.exports = router;
