var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    ISBN: {type: Number},
    imagePath: {type: String},
    title: {type: String},
    authors: {type: String},
    price: {type: Number}
});

module.exports = mongoose.model('Book', bookSchema);