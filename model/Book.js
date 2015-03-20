var mongoose = require('mongoose');
var Book = mongoose.model('Book',{
	username : String,
	bookname : String,
	bookclass : String,
	booksrc : String,
	grade : Number,
	information : String,
	date : String,
	isOn : Boolean
});

module.exports = Book;
