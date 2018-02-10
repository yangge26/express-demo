var express = require("express");
var router = express.Router();

var formidable = require('formidable');
var fs = require('fs');

router.post("/upload", function(req, res) {
	var form = new formidable.IncomingForm(); //创建上传表单
	form.encoding = 'utf-8'; //设置编辑
	form.uploadDir = 'res/images/'; //设置上传目录
	form.keepExtensions = true; //保留后缀
	form.maxFieldsSize = 2 * 1024 * 1024; //文件大小

	form.parse(req, function(err, fields, files) {
		console.log(fields.name);
		console.log(JSON.stringify(files));

		if(err) {
			console.log("error");
			return;
		}

		var extName = ''; //后缀名
		console.log(files.file.type);
		switch(files.file.type) {
			case 'image/pjpeg':
				extName = 'jpg';
				break;
			case 'image/jpeg':
				extName = 'jpg';
				break;
			case 'image/png':
				extName = 'png';
				break;
			case 'image/x-png':
				extName = 'png';
				break;
		}

		if(extName.length == 0) {
			console.log('只支持png和jpg格式图片');
			return;
		}
	});

	res.locals.success = '上传成功';
	var obj = {
		"code": 100,
		"desc": "success"
	};
	res.json(obj);
});

module.exports = router;