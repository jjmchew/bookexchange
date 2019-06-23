const express = require('express');
const app = express();
const mysql = require('mysql');
var cors = require('cors');

app.use(cors());
app.use(express.json());

var con = mysql.createConnection({
  host: 'localhost',
  user: 'jjmchewa_robogarden',
  password: 'Password123',
  database: 'jjmchewa_roboproject'
});

//make DB connection
con.connect(function(err) {
  if (err) throw err;
  console.log('Database Connected!');
});

app.get('/api/books', function(req, res) {
  var sql = `SELECT * FROM books where status='active'`;
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

app.patch('/api/books/:id', function(req, res) {
  var id = req.params.id;
  var sql = `update books set status='closed' where id=${id}`;
  con.query(sql, function(err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result[0]);
  });
});

app.post('/api/books', function(req, res) {
  var title = req.body.title;
  var author = req.body.author;
  var publishdate = req.body.publishdate;
  var category = req.body.category;
  var coversrc = req.body.coversrc;
  var contact = req.body.contact;
  var phone = req.body.phone;
  var email = req.body.email;
  var postingpw = req.body.postingpw;
  var tempabstract = req.body.abstract;
  // need to escape apostrophes that may be entered in the abstract (replace all ' with '')
  var abstract = tempabstract.replace(/'/gi, `''`);

  var status = 'active';

  var sql = `INSERT INTO books (title, author, publishdate, category, coversrc, contact, phone, email, postingpw, abstract, status) VALUES ('${title}','${author}','${publishdate}','${category}','${coversrc}','${contact}','${phone}','${email}','${postingpw}','${abstract}','${status}')`;
  console.log(sql);
  con.query(sql, function(err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result[0]);
  });
});

// James' DB settings - note different port
//  at SSH command line:
//  export NODE_ENV=production
//  export port=8090
console.log('The Current Environment now is ');
console.log(app.get('env'));
console.log(process.env.NODE_ENV);

app.listen(process.env.PORT || 8090, function() {
  console.log('Server is running on port: ');
  console.log(process.env.PORT);
});
// --------end James' DB settings
