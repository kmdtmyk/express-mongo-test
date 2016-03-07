"use strict";

let express = require('express');
let router = express.Router();
let mongodb = require('mongodb');

let user;

mongodb.MongoClient.connect('mongodb://localhost:27017/test', function(err, database){
    user = database.collection('users');
});


router.get('/', (req, res) => {

    user.find().toArray((err, users) => {
        res.render('users/index', {
            users: users
        });
    });
});

router.get('/new', (req, res) => {
    res.render('users/new');
});

router.post('/create', (req, res) => {
    // console.log(req.body);
    user.insert(req.body);
    res.redirect('/users');
});

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    user.remove({_id: id});
    res.redirect('/users');
});

module.exports = router;
