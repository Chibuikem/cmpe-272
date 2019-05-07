//bookController.js

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Book = require('./book');

//CREATES A NEW BOOK
router.post('/', function (req, res) {
    Book.create({
            isbn : req.body.isbn,
            title : req.body.title,
			author : req.body.author,
			price : req.body.price,
			book_id: req.body.book_id
        }, 
        function (err, book) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(book);
        });
});

//GETS A SINGLE BOOK FROM THE DATABASE BY ISBN
router.get('/:isbn', function (req, res) {
    Book.findOne(req.params.isbn, function (err, book) {
        if (err) return res.status(500).send("There was a problem finding the book.");
        if (!book) return res.status(404).send("No book found.");
        res.status(200).send(book);
    });
});



//RETURNS ALL THE BOOKS IN THE DATABASE
router.get('/', function (req, res) {
    Book.find({}, function (err, books) {
        if (err) return res.status(500).send("There was a problem finding the books.");
        res.status(200).send(books);
    });
});

module.exports = router;