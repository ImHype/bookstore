var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var User = mongoose.model('User',{
	username : String,
	password : String,
	realname : String,
	phone: Number,
	email : String,
	qq : Number,
	college : String,
	major : String,
	date : Object
});

module.exports = User;
