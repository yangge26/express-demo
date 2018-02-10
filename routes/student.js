var express = require("express");
var router = express.Router();
var dao = require('../dao/student.js');
var request = require('request');

router.get('/nba', function(req, res) {
	getNbaData(function(data) {
		res.json(data);		
	});
});

router.post("/getall", function(req, res) {
	dao.queryAll(function(data) {
		res.json(data);
	});
});
router.post("/addone", function(req, res) {
	var obj = req.body;
	dao.addOne(obj, function(data) {
		res.json(data);
	});
});
router.post("/delone/:id", function(req, res) {
	var id = req.params.id;
	dao.delOne(id, function(data) {
		res.json(data);
	});
});
router.get("/getone/:id", function(req, res) {
	var id = req.params.id;
	dao.getOne(id, function(data) {
		res.json(data);
	});
});
router.post("/updateone/:id", function(req, res) {
	var id = req.params.id;
	var obj = req.body;
	dao.updateOne(id, obj, function(data) {
		res.json(data);
	});
});


function getNbaData(cb) {
	var url = "https://nba.hupu.com/match/nba?offset=0";
	request(url, function(error, response, body) {
		if(!error && response.statusCode == 200) {
			cb(body)
		}
	});
}

module.exports = router;