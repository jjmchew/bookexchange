const express = require('express');
const app = express();
const mysql = require('mysql');

app.use(express.json());

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
  });

//create connection
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "password",
	database: "roboproject"
  });

  //make DB connection
con.connect(function(err) {
	if (err) throw err;
	console.log("Database Connected!");
  });

app.get('/api/books', function(req, res){
	
	var sql = "SELECT * FROM books";
	con.query(sql, function (err, result, fields) {
		if (err) throw err;
		console.log(result);
		res.send(result);
	});
});

app.post('/api/task', function(req, res){
	var formdata = req.body;
	console.log(formdata);
	var sql = `INSERT INTO tasks (name, description, start_date, end_date, status) VALUES ('${formdata.name}', '${formdata.description}', '${formdata.start_date}', '${formdata.end_date}', '${formdata.status}')`;
	console.log(sql);
	con.query(sql, function (err, result) {
		if (err) throw err;
		res.status(200).send([]);
	});

});

app.listen(3000, function() {
	console.log('Server is running on port 3000');
});