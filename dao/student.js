var mysql = require('mysql');
var dbconfig = require('../config/database');
var connection = mysql.createConnection(dbconfig.connection);

connection.query('USE ' + dbconfig.database);

module.exports = {
	queryAll: function(fn) {
		var sql = 'select * from student';
		connection.query(sql, function(err, rows, fields) {
			if(err) {
				throw err;
			}
			if(rows) {
				fn && fn(rows);
			}
		});
	},
	addOne: function(obj, fn) {
		var sql = insertSqlFormat('student', obj);
		connection.query(sql, function(err, rows, fields) {
			if(err) {
				throw err;
			} else {
				fn && fn({
					"code": "100",
					"desc": "yes"
				});
			}
		});
	},
	delOne: function(id, fn) {
		var sql = 'delete from student where id=' + id;
		connection.query(sql, function(err, rows, fields) {
			if(err) {
				throw err;
			}
			if(rows) {
				fn && fn({
					"code": "100",
					"desc": "yes"
				});
			}
		});
	},
	getOne: function(id, fn) {
		var sql = 'select * from student where id=' + id;
		connection.query(sql, function(err, rows, fields) {
			if(err) {
				throw err;
			}
			if(rows) {
				fn && fn(rows);
			}
		});
	},
	updateOne: function(id, obj, fn) {
		var sql = updateSqlFormat('student', obj, id);
		connection.query(sql, function(err, rows, fields) {
			if(err) {
				throw err;
			}
			if(rows) {
				fn && fn({
					"code": "100",
					"desc": "yes"
				});
			} else {
				fn && fn({
					"code": "500",
					"desc": "no"
				});
			}
		});
	}
}

function insertSqlFormat(tname, obj) {
	var keyArr = [];
	var valArr = [];

	for(var k in obj) {
		keyArr.push(k);
		valArr.push('"' + obj[k] + '"');
	}

	var keyStr = keyArr.join(',');
	var valStr = valArr.join(',');
	console.log(keyStr);
	console.log(valStr);

	return 'insert into ' + tname + ' (' + keyStr + ') values (' + valStr + ')';
}

function updateSqlFormat(tname, obj, id) {
	var arr = [];
	for(var k in obj) {
		var str = k + '=' + '"' + obj[k] + '"';
		arr.push(str);
	}
	return 'update ' + tname + ' set ' + arr.join(',') + ' where id=' + id;
}