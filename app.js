var fs = require('fs');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var routes = require('./routes/index');
var user = require('./routes/users');
var M = require("connect-multiparty");
var m = M();
var BookModel = require('./model/Book');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(session({secret:'book'}));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/user', user);

app.post('/uploadpage',m,function(req,res){
    if(req.session.user!=undefined){
        var time = new Date().getTime();
        var path = "./public/upload/"+time+req.files['file']['originalFilename'];
        var picsrc = "/upload/"+time+req.files['file']['originalFilename'];
        var readable = fs.createReadStream(req.files['file']['path']);
        var writable = fs.createWriteStream(path);
        var book = new BookModel({
            username : req.session.user.username,
            bookname:req.body.bookname,
            bookclass:req.body.class,
            grade:req.body.grade,
            information:req.body.info,
            date:time,
            booksrc:picsrc,
            isOn:true
        });
        book.save();
        readable.pipe(writable);
        res.redirect("/user/"+req.session.user._id+'/mystore?kind=all');
    }else{
        res.send("<a href='/login'>请登录<a>");
    }
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
