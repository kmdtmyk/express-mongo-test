"use strict";

let express = require('express');
let router = express.Router();

let User = require('../models/user');



router.get('/', (req, res) => {

    User.find({}, (error, users) => {
        res.render('users/index', {
            users: users
        })
    });

});

router.get('/new', (req, res) => {
    res.render('users/new');
});

router.post('/create', (req, res) => {
    // console.log(req.body);
    User.create(req.body.user, (error, user) => {
        if(error){
            console.log(error);
        }else{
            // console.log(user);
            res.redirect('/users');
        }
    });

});

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    // user.remove({_id: id});
    User.remove({_id: id}, (error) => {
        res.redirect('/users');
    })
    // res.redirect('/users');
});

module.exports = router;
