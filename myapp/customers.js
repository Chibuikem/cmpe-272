//creates the bookstore database and connects to it
var db = connect('127.0.0.1:27017/bookstore'),
    bookstore = null;

print('* Database created');

//create the customers collection and add documents to it
db.customers.insert({"_id" : 1, "name":"Khal Drogo","email":"jason_momoa@gameofthron.es","address":"1192 Metropolitan Avenue, Queens, New York, 12385, USA"});
db.customers.insert({"_id" : 2, "name":"Jane Doe","email":"janedoe@email.com","address":"Deanshanger Memorial Community Cent, Little London, Milton Keynes, MK19 6HT"});
db.customers.insert({"_id" : 3, "name":"Dean Smith","email":"deansmith@email.com","address":"450 Lewis Rd, Fountain, NC, 27829"});
db.customers.insert({"_id" : 4, "name":"Karen Foss","email":"karenfoss@email.com","address":"504 7 Ave , Beaverlodge, AB, T0H"});
db.customers.insert({"_id" : 5, "name":"Jannett Tracy","email":"jannetttracy@email.com","address":"1203  Public Works Drive, Johnson City, Tennessee,  37601"});

print('* Customers Successfully Added');

//set a reference to all documents in the database
bookstore = db.customers.find();

print('* All customers:');

//iterate the customers collection and output each document
while (bookstore.hasNext()) {
   printjson(bookstore.next());
};

//drop the database
db.dropDatabase();

print('* Database dropped');