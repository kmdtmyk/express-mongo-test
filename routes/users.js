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

router.get('/:id', (req, res) => {
    res.render('users/show');
});

router.get('/:id/edit', (req, res) => {
    let id = req.params.id;

    User.findOne({_id: id}, (error, user) => {
        res.render('users/edit', {
            user: user
        })
    });

});

router.post('/', (req, res) => {

    User.create(req.body.user, (error, user) => {
        if(error){
            console.log(error);
        }else{
            res.redirect('/users');
        }
    });

});

router.patch('/:id', (req, res) => {
    let id = req.params.id;
    let user = req.body.user;

    User.findOneAndUpdate({_id: id}, {$set: user}, (error, user) => {
        if(error){
            console.log(error);
        }else{
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
