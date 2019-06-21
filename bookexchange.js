const express = require('express');
const app = express();
const mysql = require('mysql');

app.use(express.json());
// added to match wk3usecase and support post requests to database (without this post requests through postman pass undefined values)

// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   next();
// });

//create connection for James' online MySQL DB set-up.
//    NOTE:  also need to change the port settings at end of this file (port 3306 for James)
var con = mysql.createConnection({
  host: 'localhost',
  user: 'jjmchewa_robogarden',
  password: 'Password123',
  database: 'jjmchewa_roboproject'
});
// end James' version

// create connection for Lili's MySQL DB set-up
// var con = mysql.createConnection({
// 	host: "localhost",
// 	user: "root",
// 	password: "password",
// 	database: "roboproject"
//   });

//make DB connection
con.connect(function(err) {
  if (err) throw err;
  console.log('Database Connected!');
});

app.get('/api/books', function(req, res) {
  var sql = 'SELECT * FROM books';
  con.query(sql, function(err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.get('/api/books/:id', function(req, res) {
  var id = req.params.id;
  var sql = `SELECT * FROM books Where id=${id}`;
  con.query(sql, function(err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result[0]);
  });
});

app.post('/api/books', function(req, res) {
  //   Lili's version:
  //   var formdata = req.body;
  // 	console.log(formdata);
  // 	var sql = `INSERT INTO books (title, author, publishdate, category, coversrc, contact, phone, email) VALUES ('${formdata.title}', '${formdata.author}','${formdata.publishdate}', '${formdata.category}','${formdata.coversrc}','${formdata.contact}', '${formdata.phone}','${formdata.email}')`;

  //   James' version:   mirrors wk3usecase
  //   updated to troubleshoot post requests (previously not working)
  //   root problem may have been lack of urlencoded addition at top

  var title = req.body.title;
  var author = req.body.author;
  var publishdate = req.body.publishdate;
  var category = req.body.category;
  var coversrc = req.body.coversrc;
  var contact = req.body.contact;
  var phone = req.body.phone;
  var email = req.body.email;
  var postingpw = req.body.postingpw;
  var abstract = req.body.abstract;
  var sql =
    `INSERT INTO books (title, author, publishdate, category, coversrc, contact, phone, email, postingpw, abstract) VALUES ('` +
    title +
    `','` +
    author +
    `','` +
    publishdate +
    `','` +
    category +
    `','` +
    coversrc +
    `','` +
    contact +
    `','` +
    phone +
    `','` +
    email +
    `','` +
    postingpw +
    `','` +
    abstract +
    `');`;
  // end James' version

  console.log(sql);
  con.query(sql, function(err, result) {
    if (err) throw err;
    res.send(result);
  });
});

// Lili's DB settings (note different port)
// app.listen(3000, function() {
//   console.log('Server is running on port 3000');
// });
// ----end Lili's DB settings

// James' DB settings - note different port
console.log('The Current Environment now is ');
console.log(app.get('env'));
console.log(process.env.NODE_ENV);

app.listen(process.env.PORT || 8090, '0,0,0,0', function() {
  console.log('Server is running on port: ');
  console.log(process.env.PORT);
});
// --------end James' DB settings
