var express = require("express");
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.use(express.static(__dirname));

app.all('*', function(req, res, next) {	
    res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use('/student', require('./routes/student.js'));
app.use('/upload', require('./routes/upload.js'));
app.use('/demo', require('./routes/demo.js'));

app.listen(8080);

console.log("success");