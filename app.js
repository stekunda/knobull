var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

var mongoose = require('mongoose');
var passport = require('passport');

// connect MongoDB
mongoose.connect('mongodb://temp:temp@ds159200.mlab.com:59200/knobull', function(err,db){
    if (!err){
        console.log('Connected');
    } else{
        console.dir(err); //failed to connect
    }
});

require('./models/Posts');
require('./models/Comments');
require('./models/Users');
require('./config/passport');

var mb = require('./routes/mb');
var users = require('./routes/users');
var home = require('./routes/home');
var about = require('./routes/about');
var contact = require('./routes/contact');
var privacy = require('./routes/privacy');
var resources = require('./routes/resources');
var studentnews = require('./routes/studentnews');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());

app.use('/', home);
app.use('/messageboard', mb);
app.use('/users', users);
app.use('/about', about);
app.use('/privacy', privacy);
app.use('/contact', contact);
app.use('/resources', resources);
app.use('/studentnews', studentnews);

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

