var connection = require('./connection.js');

function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push('?');
	}

	return arr.toString();
}

function objToSql(ob) {
	// column1=value, column2=value2,...
	var arr = [];

	for (var key in ob) {
		if (ob.hasOwnProperty(key)) {
			arr.push(key + '=' + ob[key]);
		}
	}

	return arr.toString();
}

var orm = {
	selectAll: function(table, callback) {
		var query = "SELECT * FROM " + table;
		connection.query(query, function(err, result) {
			if(err) throw err;
			callback(result);
		});
	},
	insertOne: function(table, cols, vals, callback) {
		var query = "INSERT INTO " + table + "(" + cols + ") VALUES (" +  printQuestionMarks(vals.length) + ")";
		connection.query(query, vals, function(err, result) {
			callback(results);
		})
	},
	updateOne: function(table, colVals, condition, callback) {
		var query = "UPDATE " + table + " SET " + objToSql(objColVals) + " WHERE " + condition;
		connection.query(query, vals, function(err, result) {
			callback(results);
		})
	}
}

module.exports = orm;