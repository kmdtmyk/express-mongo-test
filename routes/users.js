"use strict";

let express = require('express');
let router = express.Router();

let User = require('../models/user');



router.get('/', (req, res) => {
    let query = req.query;
    let regexp = new RegExp(query.q);

    User
        .find({
            $or: [
                {name: regexp},
                {furigana: regexp},
                {mailAddress: regexp},
            ]
        })
        .exec((error, users) => {
            res.render('users/index', {
                query: query,
                users: users,
            })
        });

});

router.get('/new', (req, res) => {
    let user = new User();
    res.render('users/new', {
        user: user
    });
});

router.get('/:id', (req, res) => {
    let id = req.params.id;

    User.findOne({_id: id}, (error, user) => {
        res.render('users/show', {
            user: user
        })
    });
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
