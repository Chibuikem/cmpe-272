var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const MongoClient = require('mongodb').MongoClient;

// replace the uri string with your connection string.
const uri = "mongodb+srv://cajuluokeke:Onyeabacha1%24@test-cluster-qau7u.mongodb.net/test?retryWrites=true"

var bookSchema = new mongoose.Schema({
  ISBN: Number,
  title: String,
  authors: Array,
  price: Number
});

var Book = mongoose.model("Book", bookSchema);

mongoose.connect(uri,{ useNewUrlParser: true }, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }

   console.log('Connected...');
   var db = client.db('sample_bookstore');
   const collection = client.db("sample_bookstore").collection("sample_books");
   // perform actions on the collection object
   db.collection('sample_books').find({}, function (err, docs) {
	  if(err) return next(err);
    docs.each(function(err, doc) {
      if(doc) {
        console.log(doc);
        }
   client.close();
	})
   })
});

/*
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://cajuluokeke%40gmail%2Ecom:Onyeabacha1%24@test-cluster-qau7u.mongodb.net/test?retryWrites=true', { 
    useNewUrlParser: true 
    }, function(err, db) {

    });
*/