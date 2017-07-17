var express = require('express');
var router = express.Router();
var http = require('http');

router.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});
/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Express'
	});
});

// 轮播的接口

// localhost:3000/lunbo
router.get('/lunbo', function(req, res) {

	var page = req.query.page;
	var count = req.query.count;
	// 要去请求  卖座网的接口

	// http://m.maizuo.com/v4/api/billboard/home?__t=1500253189212
	var time = new Date().getTime();

	http.get('http://m.maizuo.com/v4/api/billboard/home?__t=' + time, function(response) {

		var data = '';
		response.on('data', function(chunk) {
			data += chunk;
		})

		response.on('end', function() {
			res.send(data);
		})

	})

})
module.exports = router;