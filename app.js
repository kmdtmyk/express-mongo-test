var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var mongodb = require('mongodb');

var morgan = require('morgan');

var users;
var PORT = 3000;

var app = express();

// app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
// app.engine('ejs', ejs.renderFile);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.listen(PORT);


mongodb.MongoClient.connect('mongodb://localhost:27017/test', function(err, database){
    users = database.collection('users');
    // users.insert({name: 'test', date: new Date()});
});


app.get('/users.:format?', function(req, res){
    // console.log(req.params);
    users.find().toArray(function(err, users){
        // res.send(items);
        res.render('users/index', {
            users: users
        });
    });
});

app.get('/users/new', function(req, res){
    res.render('users/new');
});

app.post('/users/create', function(req, res){
    // console.log(req.body);
    users.insert(req.body);
    res.redirect('/users');
});
