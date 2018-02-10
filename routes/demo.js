var express = require("express");
var router = express.Router();

router.post("/save", function(req, res) {
	console.log(req.method);
	console.log(req.baseUrl);
	console.log(req.path);
	console.log(req.query);
	console.log(req.query.username);
	console.log(req.body);
	console.log(req.body.username);
	console.log(req.body.password);
});

router.post("/show/:id", function(req, res) {
	console.log(req.params.id);
});

module.exports = router;