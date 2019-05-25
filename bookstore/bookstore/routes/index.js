var express = require('express');
var router = express.Router();

var Cart = require('../models/cart');
var Book = require('../models/book');

/* GET home page. */
router.get('/', function(req, res, next) {
  var books = Book.find(function(err, docs){
    var bookChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i+= chunkSize){
      bookChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('book/index', { title: 'Dripped out Bookstore', books: bookChunks });
  });
});

router.get('/add-to-cart/:id', function(req, res, next) {
  var bookId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  Book.findById(bookId, function(err, book) {
    if (err) {
      return res.redirect('/');
    }
    cart.add(book, book.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/');
  });
});

router.get('/cart', function(req, res, next) {
  if(!req.session.cart) {
    return res.render('book/cart', {books: null});
  }
  var cart = new Cart(req.session.cart);
  res.render('book/cart', {books: cart.generateArray(), totalPrice: cart.totalPrice});
});

router.get('/checkout', function(req, res, next) {
  if(!req.session.cart) {
    return res.redirect('book/cart');
  }
  var cart = new Cart(req.session.cart);
  res.render('book/checkout', {total: cart.totalPrice, orderNum: cart.orderNumber});
  //req.flash('sucess', 'Successfully placed order!');
  req.session.cart = null;
});

module.exports = router;
