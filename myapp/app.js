var mongoose = require("mongoose");
var express = require('express');
var app = express();
var db = require('./db');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var Book = mongoose.model("Book", bookSchema);

var bookSchema = new mongoose.Schema({
  ISBN: Number,
  title: String,
  authors: Array,
  price: Number
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/addbook", (req, res) => {
  var myData = new Book(req.body);
  myData.save()
    .then(item => {
      res.send("Thank you for you Order. Your order number is 99huh8889j8");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});


/*
var UserController = require('./user/UserController');
app.use(bodyParser.json());
app.use('/users', UserController);
*/
module.exports = app;

/*
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
*/
