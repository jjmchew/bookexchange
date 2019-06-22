const express = require('express');
const app = express();
const mysql = require('mysql');
var cors = require('cors');

app.use(cors());
app.use(express.json());

/*app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});*/

var con = mysql.createConnection({
  host: 'localhost',
  user: 'robogarden',
  password: 'Password123',
  database: 'roboproject'
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
  var abstract = req.body.abstract;
  var status = 'active';
  var sql =
    `INSERT INTO books (title, author, publishdate, category, coversrc, contact, phone, email, postingpw, abstract, status) VALUES ('` +
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
    `','` +
    status +
    `');`;

  console.log(sql);
  con.query(sql, function(err, result) {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(3000, function() {
  console.log('Server is running on port 3000');
});
