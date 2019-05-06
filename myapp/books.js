//creates the Bookstore database and connects to it
var db = connect('127.0.0.1:27017/bookstore'),
    bookstore = null;

print('* Database created');

//create the books collection and add documents to it
db.books.insert({"_id" : 1, "ISBN":{"$numberLong":"1904764859162"},"title":"Random Book Title 2","authors":["Author C","Author D"],"price":{"$numberDouble":"14.99"}});
db.books.insert({"_id" : 2, "ISBN":{"$numberLong":"4837109283745"},"title":"Random Book Title 3","authors":["Author E"],"price":{"$numberDouble":"79.95"}});
db.books.insert({"_id" : 3, "ISBN":{"$numberLong":"9874561452311"},"title":"Random Book Title 4","authors":["Author F","Author A","Author C"],"price":{"$numberDouble":"4.99"}});
db.books.insert({"_id" : 4, "ISBN":{"$numberLong":"7856325987416"},"title":"Random Book Title 56","authors":["Author k","Author F","Author G"],"price":{"$numberDouble":"1.99"}});
db.books.insert({"_id" : 5, "ISBN":{"$numberLong":"7853696325417"},"title":"Random Book Title 43","authors":["Author L","Author A","Author D","Author M"],"price":{"$numberDouble":"40"}});
db.books.insert({"_id" : 6, "ISBN":{"$numberLong":"9862345712354"},"title":"Random Book Title 123","authors":["Author B"],"price":{"$numberDouble":"22"}});
db.books.insert({"_id" : 7, "ISBN":{"$numberLong":"3265458520123"},"title":"Random Book Title 30","authors":["Author P","Author E"],"price":{"$numberDouble":"129.95"}});
db.books.insert({"_id" : 8, "ISBN":{"$numberLong":"7852003214698"},"title":"Random Book Title 99","authors":["Author O","Author X","Author C","Author V"],"price":{"$numberDouble":"89.99"}});
db.books.insert({"_id" : 9, "ISBN":{"$numberLong":"5563201478963"},"title":"Random Book Title 71","authors":["Author V"],"price":{"$numberDouble":"60"}});
db.books.insert({"_id" : 10, "ISBN":{"$numberLong":"8475629374629"},"title":"Random Book Title 1","authors":["Author A","Author B"],"price":{"$numberDouble":"24.99"}});

print('* Books Successfully Added');

//set a reference to all documents in the database
bookstore = db.books.find();

print('* All Books:');

//iterate the books collection and output each document
while (bookstore.hasNext()) {
   printjson(bookstore.next());
};

//drop the database
db.dropDatabase();

print('* Database dropped');