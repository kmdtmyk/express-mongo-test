var express = require('express');
var mongodb = require('mongodb');

var users;
var PORT = 3000;

var app = express();
app.use(express.static('public'));
app.listen(PORT);


mongodb.MongoClient.connect('mongodb://localhost:27017/test', function(err, database){
    users = database.collection('users');
    // users.insert({name: 'test', date: new Date()});
});


app.get('/users.:format?', function(req, res){
    // console.log(req.params);
    users.find().toArray(function(err, items){
        res.send(items);
    });
});
