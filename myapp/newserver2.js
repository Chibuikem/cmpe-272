var express     =   require("express");
var app         =   express();
var bodyParser  =   require("body-parser");
var router      =   express.Router();
var mongodb 	= require("mongodb");
var MongoClient = require("mongodb").MongoClient;
//var db;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));

// Initialize connection once
MongoClient.connect("mongodb+srv://cajuluokeke:Onyeabacha1%24@test-cluster-qau7u.mongodb.net/test?retryWrites=true" , { useNewUrlParser: true }, function(err, client) {
  if(err) return console.error(err);

  var db = client.db('test-database');
  db.collection('test-books');
  
  db.collection('test-books').aggregate([
    { $lookup:
      {from: 'test-inventory', localField: '_id', foreignField: 'book_id', as: 'bookdetails'}
    }
  ]).toArray(function(err, res) {
    if (err) throw err;
    console.log(JSON.stringify(res));
    client.close();
	});
  });
	  

  // the Mongo driver recommends starting the server here because most apps *should* fail to start if they have no DB.  If yours is the exception, move the server startup elsewhere.

// Reuse database object in request handlers

/*
router.get("/", function(req, res, next) {
  db.collection("test-books").find({}, function(err, docs) {
    if(err) return next(err);
    docs.each(function(err, doc) {
      if(doc) {
        console.log(doc);
        }
      else {
        res.end();
      }
    });
  }).limit(10,function(e,d){});
});
*/

app.use('/',router);

app.listen(3000);
console.log("Listening to PORT 3000");