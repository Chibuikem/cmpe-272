//creates the bookstore database and connects to it
var db = connect('127.0.0.1:27017/bookstore'),
    bookstore = null;

print('* Database created');

//create the inventory collection and add documents to it
db.inventory.insert({"book_id": 10, "title":"Random Book Title 1","quantity":{"$numberInt":"40"}});
db.inventory.insert({"book_id": 1,"title":"Random Book Title 2","quantity":{"$numberInt":"30"}});
db.inventory.insert({"book_id": 2,"title":"Random Book Title 3","quantity":{"$numberInt":"55"}});
db.inventory.insert({"book_id": 3,"title":"Random Book Title 4","quantity":{"$numberInt":"25"}});
db.inventory.insert({"book_id": 4,"title":"Random Book Title 56","quantity":{"$numberInt":"42"}});
db.inventory.insert({"book_id": 5,"title":"Random Book Title 43","quantity":{"$numberInt":"12"}});
db.inventory.insert({"book_id": 6,"title":"Random Book Title 123","quantity":{"$numberInt":"80"}});
db.inventory.insert({"book_id": 7,"title":"Random Book Title 30","quantity":{"$numberInt":"75"}});
db.inventory.insert({"book_id": 8,"title":"Random Book Title 99","quantity":{"$numberInt":"99"}});
db.inventory.insert({"book_id": 9,"title":"Random Book Title 71","quantity":{"$numberInt":"12"}});

print('* inventory Successfully Added');

//set a reference to all documents in the database
bookstore = db.inventory.find();

print('* All inventory:');

//iterate the inventory collection and output each document
while (bookstore.hasNext()) {
   printjson(bookstore.next());
};

//drop the database
db.dropDatabase();

print('* Database dropped');


