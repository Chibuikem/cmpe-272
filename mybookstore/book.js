//Book.js
var mongoose = require('mongoose');  
var BookSchema = new mongoose.Schema({
	ISBN: Number,
	title: String,
	authors: Array,
	price: Number
});
mongoose.model('Book', BookSchema);

module.exports = mongoose.model('Book');
