var express     =   require("express");
var app         =   express();
var bodyParser  =   require("body-parser");
var router      =   express.Router();
var mongodb 	= require("mongodb");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const MongoClient = require('mongodb').MongoClient;

//replace the uri string with your connection string.
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
   }else{
	   console.log('Connected...');
	   var db = client.db('sample_bookstore');
	   const collection = client.db("sample_bookstore").collection("sample_books");
   
		//perform actions on the collection object
		db.sample_books.insert({"_id" : 1, "ISBN":{"$numberLong":"1904764859162"},"title":"Random Book Title 2","authors":["Author C","Author D"],"price":{"$numberDouble":"14.99"}});
		db.sample_books.insert({"_id" : 2, "ISBN":{"$numberLong":"4837109283745"},"title":"Random Book Title 3","authors":["Author E"],"price":{"$numberDouble":"79.95"}});
		db.sample_books.insert({"_id" : 3, "ISBN":{"$numberLong":"9874561452311"},"title":"Random Book Title 4","authors":["Author F","Author A","Author C"],"price":{"$numberDouble":"4.99"}});
		db.sample_books.insert({"_id" : 4, "ISBN":{"$numberLong":"7856325987416"},"title":"Random Book Title 56","authors":["Author k","Author F","Author G"],"price":{"$numberDouble":"1.99"}});
		db.sample_books.insert({"_id" : 5, "ISBN":{"$numberLong":"7853696325417"},"title":"Random Book Title 43","authors":["Author L","Author A","Author D","Author M"],"price":{"$numberDouble":"40"}});
		db.sample_books.insert({"_id" : 6, "ISBN":{"$numberLong":"9862345712354"},"title":"Random Book Title 123","authors":["Author B"],"price":{"$numberDouble":"22"}});
		db.sample_books.insert({"_id" : 7, "ISBN":{"$numberLong":"3265458520123"},"title":"Random Book Title 30","authors":["Author P","Author E"],"price":{"$numberDouble":"129.95"}});
		db.sample_books.insert({"_id" : 8, "ISBN":{"$numberLong":"7852003214698"},"title":"Random Book Title 99","authors":["Author O","Author X","Author C","Author V"],"price":{"$numberDouble":"89.99"}});
		db.sample_books.insert({"_id" : 9, "ISBN":{"$numberLong":"5563201478963"},"title":"Random Book Title 71","authors":["Author V"],"price":{"$numberDouble":"60"}});
		db.sample_books.insert({"_id" : 10, "ISBN":{"$numberLong":"8475629374629"},"title":"Random Book Title 1","authors":["Author A","Author B"],"price":{"$numberDouble":"24.99"}});
   
		sample_bookstore = db.sample_books.find();
		
		//drop the database
		db.dropDatabase();
		
		console.log('* Database dropped');
		client.close();
		
   }
   
});